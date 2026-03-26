function HeroView() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden nebula-glow"
      id="inicio"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <span className="text-sm uppercase tracking-[0.2em] text-secondary font-bold mb-6 block">
          Innovación Digital
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 font-headline">
          De idea a producto
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">
            en tiempo récord
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Construimos productos digitales de alta gama que automatizan tu flujo de trabajo, escalan
          tu visión y mejoran la vida de tus usuarios.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            className="w-full md:w-auto bg-gradient-to-r from-primary-container to-primary text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(191,240,255,0.3)] transition-all"
            href="https://forms.gle/ukfE8YVW7R9oQvsL8"
            target="_blank"
            rel="noreferrer"
          >
            Empezar proyecto
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroView
