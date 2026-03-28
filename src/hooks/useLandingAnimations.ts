import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLandingAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // ── Cursor glow that follows the mouse ────────────────────────────────
    const cursorGlow = document.createElement('div')
    cursorGlow.style.cssText = [
      'position:fixed',
      'width:500px',
      'height:500px',
      'border-radius:50%',
      'pointer-events:none',
      'z-index:0',
      'transform:translate(-50%,-50%)',
      'background:radial-gradient(circle,rgba(191,240,255,0.055) 0%,transparent 65%)',
      'transition:opacity .4s',
      'opacity:0',
    ].join(';')
    document.body.appendChild(cursorGlow)

    const onMouseMove = (e: MouseEvent) => {
      cursorGlow.style.opacity = '1'
      gsap.to(cursorGlow, { x: e.clientX, y: e.clientY, duration: 1.1, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Main GSAP context ─────────────────────────────────────────────────
    const ctx = gsap.context(() => {

      // ── HERO: entrance timeline ─────────────────────────────────────────
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Set initial state explicitly so elements are never invisible before GSAP runs
      gsap.set('[data-anim="hero-badge"]', { opacity: 0, y: 30 })
      gsap.set('[data-anim="hero-title"]', { opacity: 0, y: 50, skewY: 2 })
      gsap.set('[data-anim="hero-subtitle"]', { opacity: 0, y: 30 })
      gsap.set('[data-anim="hero-cta"] > *', { opacity: 0, y: 20 })

      heroTl
        .to('[data-anim="hero-badge"]', { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
        .to('[data-anim="hero-title"]', { y: 0, opacity: 1, skewY: 0, duration: 0.75, ease: 'power4.out' }, '-=0.3')
        .to('[data-anim="hero-subtitle"]', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.5')
        .to('[data-anim="hero-cta"] > *', {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.5, ease: 'power3.out',
        }, '-=0.4')

      // ── HERO: orbs floating loop ────────────────────────────────────────
      gsap.to('[data-anim="hero-orb-1"]', {
        x: 60, y: -50,
        duration: 6, ease: 'sine.inOut',
        yoyo: true, repeat: -1,
      })
      gsap.to('[data-anim="hero-orb-2"]', {
        x: -80, y: 60,
        duration: 7.5, ease: 'sine.inOut',
        yoyo: true, repeat: -1, delay: 1.5,
      })
      gsap.to('[data-anim="hero-orb-3"]', {
        x: 40, y: -30,
        duration: 5, ease: 'sine.inOut',
        yoyo: true, repeat: -1, delay: 0.8,
      })

      // ── HERO: orbs parallax on scroll ───────────────────────────────────
      gsap.to('[data-anim="hero-orb-1"]', {
        yPercent: -60,
        scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
      gsap.to('[data-anim="hero-orb-2"]', {
        yPercent: 40,
        scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: 2 },
      })
      gsap.to('[data-anim="hero-orb-3"]', {
        yPercent: -80,
        scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: 1 },
      })

      gsap.to('[data-anim="hero-cta"]', {
        y: -30,
        opacity: 0,
        scrollTrigger: { trigger: '#inicio', start: 'top 25%', end: 'bottom top', scrub: 1 },
      })

      // ── SECTION HEADINGS: clip-path reveal ─────────────────────────────
      gsap.utils.toArray<HTMLElement>('section h2').forEach((heading) => {
        gsap.from(heading, {
          clipPath: 'inset(0 0 100% 0)',
          y: 30,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: { trigger: heading, start: 'top 88%' },
        })
      })

      // ── SECTION HEADING LINES: width reveal ────────────────────────────
      gsap.utils.toArray<HTMLElement>('.h-1.w-24.bg-primary').forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: line, start: 'top 90%' },
        })
      })

      // ── FEATURES: cards stagger with 3D flip ───────────────────────────
      const featureCards = gsap.utils.toArray<HTMLElement>('#servicios article')
      gsap.from(featureCards, {
        y: 80,
        opacity: 0,
        rotateX: 20,
        transformPerspective: 800,
        transformOrigin: 'top center',
        stagger: { amount: 0.7, from: 'start' },
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#servicios .grid', start: 'top 80%' },
      })

      // ── FEATURES: icon pop-in ───────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('#servicios .material-symbols-outlined').forEach((icon, i) => {
        gsap.from(icon, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(2)',
          delay: i * 0.08,
          scrollTrigger: { trigger: '#servicios .grid', start: 'top 78%' },
        })
      })

      // ── PROCESS: ESTRATEGIA parallax ───────────────────────────────────
      gsap.to('[data-anim="process-backdrop"]', {
        y: -120,
        scrollTrigger: {
          trigger: '#proceso',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // ── PROCESS: line draws from left ──────────────────────────────────
      gsap.from('[data-anim="process-line"]', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#proceso .grid', start: 'top 80%' },
      })

      // ── PROCESS: steps walk in alternating sides ────────────────────────
      gsap.utils.toArray<HTMLElement>('#proceso .grid > .relative').forEach((step, i) => {
        gsap.from(step, {
          x: i % 2 === 0 ? -60 : 60,
          y: 40,
          opacity: 0,
          delay: i * 0.15,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '#proceso .grid', start: 'top 78%' },
        })
      })

      // ── PRICING CARDS: stagger with scale ──────────────────────────────
      const pricingCards = gsap.utils.toArray<HTMLElement>('#paquetes .glass-card')
      gsap.from(pricingCards, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        stagger: { amount: 0.5 },
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#paquetes .grid', start: 'top 82%' },
      })

      // ── PRICING: featured card extra glow pulse ─────────────────────────
      const featuredCard = document.querySelector('#paquetes .bg-surface-container-high\\/60')
      if (featuredCard) {
        gsap.to(featuredCard, {
          boxShadow: '0 0 50px rgba(255,183,125,0.15)',
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1,
        })
      }

      // ── PORTFOLIO: items reveal with clip from bottom ──────────────────
      gsap.utils.toArray<HTMLElement>('#portafolio article').forEach((item, i) => {
        gsap.from(item, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 0.9,
          ease: 'power3.out',
          delay: (i % 3) * 0.12,
          scrollTrigger: { trigger: item, start: 'top 88%' },
        })
      })

      // ── PORTFOLIO: inner image parallax ────────────────────────────────
      gsap.utils.toArray<HTMLElement>('#portafolio article img').forEach((img) => {
        gsap.fromTo(img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('article'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
      })

      // ── WHY US: icon squares bounce in ─────────────────────────────────
      gsap.utils.toArray<HTMLElement>('#acerca .rounded-2xl').forEach((box, i) => {
        gsap.from(box, {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(2)',
          delay: i * 0.1,
          scrollTrigger: { trigger: '#acerca .grid', start: 'top 80%' },
        })
      })

      gsap.utils.toArray<HTMLElement>('#acerca .text-center').forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: '#acerca .grid', start: 'top 80%' },
        })
      })

      // ── CONTACT: copy slides from left, form from right ────────────────
      gsap.from('[data-anim="contact-copy"]', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#contacto', start: 'top 78%' },
      })
      gsap.from('[data-anim="contact-form"]', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#contacto', start: 'top 78%' },
      })

      // ── CONTACT: ambient orb parallax ──────────────────────────────────
      gsap.to('#contacto .absolute', {
        yPercent: -40,
        scrollTrigger: {
          trigger: '#contacto',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // ── FOOTER: fade up ─────────────────────────────────────────────────
      gsap.from('footer > div > div', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: 'footer', start: 'top 90%' },
      })

      // ── MAGNETIC BUTTONS: attract to cursor ────────────────────────────
      const magnetBtns = gsap.utils.toArray<HTMLElement>('a.rounded-full:not(.no-magnet)')
      magnetBtns.forEach((btn) => {
        const onEnter = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect()
          const cx = rect.left + rect.width / 2
          const cy = rect.top + rect.height / 2
          gsap.to(btn, {
            x: (e.clientX - cx) * 0.35,
            y: (e.clientY - cy) * 0.35,
            duration: 0.4,
            ease: 'power2.out',
          })
        }
        const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' })
        btn.addEventListener('mousemove', onEnter)
        btn.addEventListener('mouseleave', onLeave)
      })

      // ── SCROLL DEPTH: background hue shift on the page ─────────────────
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const p = self.progress
          // Subtle cyan glow intensity in the nebula hero as you leave
          const heroEl = document.querySelector<HTMLElement>('#inicio')
          if (heroEl) {
            heroEl.style.setProperty(
              '--nebula-opacity',
              String(Math.max(0, 1 - p * 4)),
            )
          }
        },
      })

    })

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMouseMove)
      cursorGlow.remove()
    }
  }, [])
}
