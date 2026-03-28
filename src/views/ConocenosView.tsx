import { animate } from 'animejs'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import faceScan2Url from '../../3d/face-scan2.glb?url'
import faceScan3Url from '../../3d/face-scan3.glb?url'
import faceScanUrl from '../../3d/face-scan.glb?url'

/** Rotación Y extra (rad): alinea el frente del GLB con la cámara. */
const MODEL_YAW_OFFSET = Math.PI

function disposeModel(root: THREE.Object3D) {
  root.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry?.dispose()
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
      for (const m of mats) m?.dispose()
    }
  })
}

type TeamMember = {
  camZ: number
  id: string
  modelRotY: number
  modelUrl: string
  name: string
  role: string
  tecnica: string
  tecnicaSymbol: string
  trayectoria: string
  vision: string
}

const TEAM: readonly TeamMember[] = [
  {
    id: 'pablo',
    name: 'Pablo',
    role: 'Fundador · Liderazgo técnico',
    trayectoria:
      'Impulsa Sierra Labs desde la arquitectura de producto y la relación con clientes. Ha llevado proyectos de cero a producción en sectores regulados y de alto tráfico, priorizando entregas iterativas y medibles.',
    tecnica:
      'Stack moderno (React, Node, nubes serverless), integraciones API, automatización y buenas prácticas de seguridad. Le interesa el código mantenible y los equipos que documentan decisiones, no solo features.',
    vision:
      'Cree que el software de calidad nace de escuchar el problema antes de enamorarse de la solución: menos humo, más prototipos que validen supuestos con usuarios reales.',
    tecnicaSymbol: 'code',
    modelUrl: faceScanUrl,
    modelRotY: 0,
    camZ: 3.08,
  },
  {
    id: 'andres',
    name: 'Andrés',
    role: 'Diseño de producto',
    trayectoria:
      'Lleva años traduciendo negocio y usuarios en interfaces claras. Ha liderado identidad visual, flujos complejos y handoff con ingeniería en productos digitales B2B y B2C.',
    tecnica:
      'Figma, sistemas de diseño, prototipado interactivo, accesibilidad (WCAG como guía), motion ligero y especificaciones que el equipo de desarrollo puede implementar sin adivinar.',
    vision:
      'Un buen diseño reduce la incertidumbre: menos reuniones repetidas, más decisiones visibles y una experiencia que se siente coherente en cada pantalla.',
    tecnicaSymbol: 'palette',
    modelUrl: faceScan3Url,
    modelRotY: 0.28,
    camZ: 2.9,
  },
  {
    id: 'carla',
    name: 'Carla',
    role: 'Ventas y relación con clientes',
    trayectoria:
      'Es el puente entre quien tiene una idea y el equipo que la construye. Acompaña prospectos desde el primer contacto hasta la firma, alineando expectativas, plazos y alcance.',
    tecnica:
      'Proceso comercial estructurado, propuestas claras, seguimiento de oportunidades y comunicación con datos (cronogramas, entregables, riesgos) para que no haya sorpresas.',
    vision:
      'Vender bien es educar: que cada cliente entienda qué va a recibir, por qué cuesta lo que cuesta y cómo Sierra Labs se hace responsable del resultado.',
    tecnicaSymbol: 'handshake',
    modelUrl: faceScan2Url,
    modelRotY: -0.32,
    camZ: 2.94,
  },
]

type SceneApi = {
  camera: THREE.PerspectiveCamera
  controls: OrbitControls
  model: THREE.Object3D | null
  renderer: THREE.WebGLRenderer
}

type ThreeCtx = {
  loader: GLTFLoader
  scene: THREE.Scene
}

function ConocenosView() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [glReady, setGlReady] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [modelEpoch, setModelEpoch] = useState(0)
  const mountRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<SceneApi | null>(null)
  const threeCtxRef = useRef<ThreeCtx | null>(null)
  const parallaxRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)
  const baseRotYRef = useRef(0)
  const memberInitializedRef = useRef(false)
  const loadedModelUrlRef = useRef<string | null>(null)
  const modelLoadGenRef = useRef(0)
  const canvasIntroDoneRef = useRef(false)
  const touchStartX = useRef<number | null>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const bioAnimSkipRef = useRef(true)

  const activeMember = TEAM[activeIndex]
  const memberCount = TEAM.length

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + memberCount) % memberCount)
  }, [memberCount])

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % memberCount)
  }, [memberCount])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const heading = document.querySelector<HTMLElement>('[data-conocenos-heading]')
    const sub = document.querySelector<HTMLElement>('[data-conocenos-sub]')
    const carousel = document.querySelector<HTMLElement>('[data-conocenos-carousel]')

    if (reduced) {
      heading?.classList.remove('opacity-0')
      sub?.classList.remove('opacity-0')
      carousel?.classList.remove('opacity-0')
      return
    }

    if (heading) {
      animate(heading, { duration: 900, ease: 'out(3)', opacity: [0, 1], translateY: [18, 0] })
    }
    if (sub) {
      animate(sub, { delay: 100, duration: 900, ease: 'out(3)', opacity: [0, 1], translateY: [14, 0] })
    }
    if (carousel) {
      animate(carousel, { delay: 60, duration: 800, ease: 'out(3)', opacity: [0, 1], translateY: [10, 0] })
    }
  }, [])

  useEffect(() => {
    const el = bioRef.current
    if (!el || typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    if (bioAnimSkipRef.current) {
      bioAnimSkipRef.current = false
      return
    }

    el.style.opacity = '0'
    el.style.transform = 'translateY(14px)'
    animate(el, {
      duration: 520,
      ease: 'out(3)',
      opacity: [0, 1],
      translateY: [14, 0],
    })
  }, [activeMember.id])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    scene.background = null

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0.05, TEAM[0].camZ)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    const motionReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    renderer.domElement.style.opacity = motionReduced ? '1' : '0'
    mount.appendChild(renderer.domElement)

    const hemi = new THREE.HemisphereLight(0xcfefff, 0x1a1a1f, 0.85)
    scene.add(hemi)
    const key = new THREE.DirectionalLight(0xffffff, 1.35)
    key.position.set(2.2, 3.5, 2.8)
    scene.add(key)
    const rim = new THREE.DirectionalLight(0xffb77d, 0.55)
    rim.position.set(-3, 1.2, -2.4)
    scene.add(rim)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.enablePan = false
    controls.minDistance = 1.55
    controls.maxDistance = 5.8
    controls.minPolarAngle = Math.PI * 0.38
    controls.maxPolarAngle = Math.PI * 0.62
    controls.target.set(0, 0, 0)

    sceneRef.current = { camera, controls, model: null, renderer }

    const resize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      const hh = Math.max(h, 1)
      camera.aspect = w / hh
      camera.updateProjectionMatrix()
      renderer.setSize(w, hh)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    const loader = new GLTFLoader()
    threeCtxRef.current = { loader, scene }
    queueMicrotask(() => setGlReady(true))

    const onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      parallaxRef.current.x = nx * 0.14
      parallaxRef.current.y = ny * 0.06
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick)
      const api = sceneRef.current
      if (api?.model) {
        const targetY = baseRotYRef.current + parallaxRef.current.x + MODEL_YAW_OFFSET
        const targetX = parallaxRef.current.y * 0.35
        api.model.rotation.y += (targetY - api.model.rotation.y) * 0.08
        api.model.rotation.x += (targetX - api.model.rotation.x) * 0.08
      }
      controls.update()
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      modelLoadGenRef.current += 1
      window.removeEventListener('pointermove', onPointerMove)
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
      controls.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose()
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          for (const m of mats) m?.dispose()
        }
      })
      threeCtxRef.current = null
      sceneRef.current = null
      loadedModelUrlRef.current = null
      memberInitializedRef.current = false
      canvasIntroDoneRef.current = false
      queueMicrotask(() => setGlReady(false))
    }
  }, [])

  useEffect(() => {
    if (!glReady) return
    const ctx = threeCtxRef.current
    const api = sceneRef.current
    if (!ctx || !api) return

    const member = TEAM[activeIndex]
    const url = member.modelUrl

    if (loadedModelUrlRef.current === url && api.model) {
      memberInitializedRef.current = true
      return
    }

    const gen = (modelLoadGenRef.current += 1)

    if (api.model) {
      ctx.scene.remove(api.model)
      disposeModel(api.model)
      api.model = null
    }
    loadedModelUrlRef.current = null
    memberInitializedRef.current = false

    const motionReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ctx.loader.load(
      url,
      (gltf) => {
        if (gen !== modelLoadGenRef.current) return
        setLoadError(null)
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        model.position.sub(center)
        const maxDim = Math.max(size.x, size.y, size.z, 0.001)
        const fit = 1.52 / maxDim
        model.scale.setScalar(fit)
        ctx.scene.add(model)

        const currentApi = sceneRef.current
        if (currentApi) currentApi.model = model

        loadedModelUrlRef.current = url
        model.rotation.y = baseRotYRef.current + MODEL_YAW_OFFSET
        model.rotation.x = 0
        memberInitializedRef.current = true
        setModelEpoch((e) => e + 1)

        if (!motionReduced && !canvasIntroDoneRef.current && currentApi?.renderer.domElement) {
          canvasIntroDoneRef.current = true
          animate(currentApi.renderer.domElement, {
            duration: 1100,
            ease: 'out(3)',
            opacity: [0, 1],
          })
        }
      },
      undefined,
      () => {
        if (gen !== modelLoadGenRef.current) return
        const fileHint = url.includes('face-scan3')
          ? '3d/face-scan3.glb'
          : url.includes('face-scan2')
            ? '3d/face-scan2.glb'
            : '3d/face-scan.glb'
        setLoadError(`No se pudo cargar el modelo 3D. Verifica que exista ${fileHint}.`)
      },
    )
  }, [activeIndex, glReady])

  useEffect(() => {
    if (!memberInitializedRef.current) return

    const member = TEAM[activeIndex]
    const api = sceneRef.current
    const from = {
      camZ: api?.camera.position.z ?? member.camZ,
      rotY: baseRotYRef.current,
    }

    const anim = animate(from, {
      camZ: member.camZ,
      duration: 780,
      ease: 'out(3)',
      onUpdate: () => {
        baseRotYRef.current = from.rotY
        if (sceneRef.current?.camera) sceneRef.current.camera.position.z = from.camZ
      },
      rotY: member.modelRotY,
    })

    return () => {
      anim.revert()
    }
  }, [activeIndex, modelEpoch])

  const onViewerTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onViewerTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current
    touchStartX.current = null
    if (start == null) return
    const end = e.changedTouches[0]?.clientX ?? start
    const dx = end - start
    if (Math.abs(dx) < 48) return
    if (dx < 0) goNext()
    else goPrev()
  }

  return (
    <section
      aria-labelledby="conocenos-heading"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      id="conocenos"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(191,240,255,0.12),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(255,183,125,0.08),transparent_50%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-3 font-label text-[10px] uppercase tracking-[0.28em] text-secondary sm:mb-4 sm:text-xs sm:tracking-[0.35em]">
          El equipo
        </p>
        <h2
          className="mb-4 font-headline text-3xl font-black tracking-tighter opacity-0 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          data-conocenos-heading
          id="conocenos-heading"
        >
          Conócenos
        </h2>

        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="relative isolate">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-5">
              <div
                aria-labelledby="conocenos-member-name"
                aria-live="polite"
                className="order-2 flex w-full max-w-2xl flex-col gap-6 pl-12 sm:gap-7 sm:pl-14 lg:order-1 lg:max-w-none lg:min-w-0 lg:pt-1 lg:pl-16 lg:pr-2 xl:pr-3"
                data-conocenos-bio
                id="member-panel"
                ref={bioRef}
                role="region"
              >
                <header className="flex flex-col gap-1.5 sm:gap-2">
                  <p className="font-label text-[11px] uppercase tracking-[0.28em] text-secondary sm:text-xs sm:tracking-[0.32em]">
                    {activeMember.role}
                  </p>
                  <h3
                    className="font-headline text-3xl font-black tracking-tighter text-on-surface sm:text-4xl md:text-5xl"
                    id="conocenos-member-name"
                  >
                    {activeMember.name}
                  </h3>
                </header>

                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2 sm:gap-2.5">
                    <p className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-primary">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        timeline
                      </span>
                      Trayectoria
                    </p>
                    <p className="text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                      {activeMember.trayectoria}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-2.5">
                    <p className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-secondary">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        {activeMember.tecnicaSymbol}
                      </span>
                      Técnica
                    </p>
                    <p className="text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                      {activeMember.tecnica}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-2.5">
                    <p className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-tertiary">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                      Visión
                    </p>
                    <p className="text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                      {activeMember.vision}
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 flex justify-center overflow-visible lg:order-2 lg:justify-start lg:sticky lg:top-28 lg:min-w-0">
                <div className="relative w-full max-w-[min(100%,340px)] sm:max-w-[min(100%,380px)]">
                  <div
                    className="relative aspect-[4/5] w-full [-webkit-mask-image:radial-gradient(ellipse_92%_90%_at_50%_50%,#000_62%,transparent_100%)] [mask-image:radial-gradient(ellipse_92%_90%_at_50%_50%,#000_62%,transparent_100%)]"
                  >
                    <div
                      aria-label={`Modelo 3D, retrato de referencia (${activeMember.name})`}
                      className="relative h-full min-h-[220px] w-full touch-pan-y"
                      onTouchEnd={onViewerTouchEnd}
                      onTouchStart={onViewerTouchStart}
                      ref={mountRef}
                      role="img"
                    />
                    {loadError ? (
                      <p className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-error sm:px-6">
                        {loadError}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-2.5 text-center text-[11px] leading-snug text-on-surface-variant sm:hidden">
                    Desliza o usa las flechas a los lados · Arrastra el modelo.
                  </p>
                </div>
              </div>
            </div>

            <nav
              aria-label="Cambiar miembro del equipo"
              className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-1 opacity-0 sm:px-2 lg:px-0"
              data-conocenos-carousel
            >
              <button
                aria-label="Miembro anterior"
                className="pointer-events-auto flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-outline-variant/45 bg-surface-container-high/80 text-on-surface shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                onClick={goPrev}
                type="button"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  chevron_left
                </span>
              </button>
              <button
                aria-label="Miembro siguiente"
                className="pointer-events-auto flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-outline-variant/45 bg-surface-container-high/80 text-on-surface shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                onClick={goNext}
                type="button"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  chevron_right
                </span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConocenosView
