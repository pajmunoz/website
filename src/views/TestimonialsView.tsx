const TESTIMONIALS = [
  {
    name: 'Jose I. Hernandez',
    role: 'CEO at TechFlow',
    accentClass: 'text-primary',
    quote:
      'Sierra Labs no solo construyó nuestra app, transformó nuestra visión en una herramienta competitiva que nos permitió escalar un 300% en 6 meses.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy52GpV37vdePaAr_yFiltoZquaF2aLQ7QwftPUxLX_NDEBKqI2c_Ecxw8q1l6E9PsLDM5T93zkzh8RgGmy353LQddizcXTRnXFVkJYvIpzyuIAWyIarRsyfUI05-u6ReIQcwLsvdoE-_VlUlvIA9J0O5dk2iYmuqK-wQklda_kVi67YM_grgq5amZHyFpDgaS2kuJibYJBUBKrUMA5gh4Md4G2ZqvXmQ-bPxhHCqBM6RLe_-jw5PT6ANJ05kG1Fl0tasKVaDYlacA',
  },
  {
    name: 'Blanca Gutierrez',
    role: 'Founder at Innova',
    accentClass: 'text-secondary',
    quote:
      'La atención al detalle en el diseño y la limpieza del código es algo que raramente se encuentra hoy en día. Son ingenieros de verdad.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1XUJMQWG3UlNmaIDWvAnwE8yWp8ZuOR8E7IOSn2wCXI6e45HXh_o54iFlLbn8W_kFOKWN26OImHGWT3KH---2x9fIq-GvzqP-9jf9nmX-BYh7pxKEqpDMShco0y-ZM3C8ScL4hStMmPwQiLqLaW7NKnqshA8mBAvTHdaOYX-Q6nhYajQGE8NKa5TkDxCF557mCws3DCGHc8L645IwuUigm1H0t4uBOfKjsrzyGKWK8Awo8ZrzTk_EULbD8jKLJHudeGQCRLAHAQCe',
  },
]

function TestimonialsView() {
  return (
    <section className="py-32 px-8 overflow-hidden" id="testimonios">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter text-center">
          Lo que dicen de nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="glass-card p-10 rounded-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={t.image}
                    alt={`Foto de ${t.name}`}
                  />
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className={`${t.accentClass} text-xs tracking-widest uppercase`}>{t.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-on-surface/90 leading-relaxed font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsView
