import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLandingAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.from('.sl-heroPill', {
        duration: 0.5,
        ease: 'power2.out',
        opacity: 0,
        y: 16,
      })

      gsap.from('.sl-heroTitle', {
        delay: 0.08,
        duration: 0.75,
        ease: 'power3.out',
        opacity: 0,
        y: 26,
      })

      gsap.from('.sl-heroSubtitle', {
        delay: 0.16,
        duration: 0.65,
        ease: 'power2.out',
        opacity: 0,
        y: 18,
      })

      gsap.from('.sl-heroActions > *', {
        delay: 0.22,
        duration: 0.5,
        ease: 'power2.out',
        opacity: 0,
        stagger: 0.08,
        y: 12,
      })

      gsap.to('.sl-heroGlow', {
        ease: 'none',
        opacity: 0.5,
        scale: 1.25,
        scrollTrigger: {
          end: 'bottom top',
          scrub: true,
          start: 'top top',
          trigger: '.sl-hero',
        },
      })

      const revealSelectors = [
        '.sl-card',
        '.sl-step',
        '.sl-serviceCard',
        '.sl-testimonial',
        '.sl-projectCard',
        '.sl-whyCard',
        '.sl-contactQuickItem',
        '.sl-contactForm',
      ]

      revealSelectors.forEach((selector) => {
        const blocks = gsap.utils.toArray<HTMLElement>(selector)
        blocks.forEach((block, index) => {
          gsap.from(block, {
            duration: 0.55,
            ease: 'power2.out',
            opacity: 0,
            scrollTrigger: {
              start: 'top 88%',
              trigger: block,
            },
            y: 20 + (index % 3) * 6,
          })
        })
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])
}
