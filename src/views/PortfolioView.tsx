const PORTFOLIO_ITEMS = [
  {
    title: 'The Legends',
    category: 'Plataforma de E-sports',
    accentClass: 'text-primary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALJroLwSKgEsKvcYWcO9gT8A8y8pF9325PDtwCt31NtUzfSvwuQ9Y7-LDkfxu5Vw_EYpm6ox9pj8ydD6M0SaTfujhqYUDq0hAQ0cuvSIOjrb04Pi2IvSz_15YWVkl3d-RS_zvwVfgcPv9cc1zo9fG7ew_8F4oNIemrSW8Zu_61eWj6kVA-cZhy7ZM_HrJQdzFpvaXdHJcXrlAeNq2-3ZA3G4Xt3kE-s2JB-0oGpAN9TEuYklqOZtSSBsOdrhWc1jz0nqVBZPcj-ySP',
    imgAlt: 'Dark high-tech data visualization dashboard',
  },
  {
    title: 'Krek Cover',
    category: 'Insurtech App',
    accentClass: 'text-secondary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkCp4wxXM0_NYU6lc8FgSyafS0vLp8zk0GT4VceyMY7UfhgmvfNmUoz_yOdp57urLxKfYI1svJNWiWXeeUmu-ohASRSpgrqdIVnj8mwxXFMcmKa87TQvKrOlgolF7WYnAsIDRMj4KidVFtI9OwcUPdgo_5-YRL6GSSCmEeR4M3y79PbXTipblnNP72ux-YWO4zuUOT6gceC81p5ni_E5j7L9O0gMUK5d47clW0VJR0x0VxVDllRfy7KQayMhqLY0u-JCo5w8KwbTK7',
    imgAlt: 'Sleek mobile app interface for insurance company',
  },
  {
    title: 'Hinojosa Asesores',
    category: 'Legal SaaS',
    accentClass: 'text-tertiary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-A0t4m3CteKTxR0QvbxPsRd0AnOQ7_53zzR7inO15stfYOzxShgFxjddZf4Cf87NCyxBTSjSZqKu7tZkO0BSpUlo0Sse_iz3NL_BdWl4Nu-3w_xK1O73wRyIYmVx7Dtr9Tma4TAL4njwfk0M9385jWIEy-XEbWc6-tbCNd7UDth5QJg3slnhuRLSr55rHiBElVVxTZ5GpdGdVT3MazPwOpuQi5tu19_fVEcW7BR2Sm8bZvcMp7whviluNA4okcW7Z982suszA13WF',
    imgAlt: 'Sophisticated legal office management system interface',
  },
  {
    title: 'PetroSa',
    category: 'Industrial Analytics',
    accentClass: 'text-primary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3DtLpjGis4sn_x4lukXR5CxLeZxYiLDcm69oD0_v9IBNqUqmC9yGvoSykF2WmedB-kmWVA4ryk4eaxbCbW_UgOMmusFw3ArJRx1tbFuzIR_ALspc8A0dVTDEuEnJ5l8cgxeqxzSN4zuqD0ept3E1vXDKFjto51GbZD2PB2-ZS0kmDZNyCO6V0d2Y4aJ-XHDHXpuXF2snMYLp4v0wQQ_U4uiuuO8NUOr4OEfiGMNMJLUToUFvdJMmeGlUw60XhiVAnHRARbmxqntcG',
    imgAlt: 'Industrial automation dashboard with real-time analytics',
  },
  {
    title: 'MarketFlow',
    category: 'Global Marketplace',
    accentClass: 'text-secondary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDc_NuW3RrVb2P5JGNHG8oylw2EU-BePGrY0kfzS66InI60OuspDgez8GyVlSYDm9BSj41eXO7enbnHhAG1-f6Xt9s3CIVMgNdgouK-wbNosidpkeIQxYS7o-6u_IVuEgpOiXyeNI9AP4e-6D5w7-RaSvnUEBKPX_ccpD3SnOUwqdIibfpoE3RTulYRnSjtWsNN4VKbkS1RcYwtRqlmt6zK0kCLyRjpGDkWn3Xl0zfyBbQUxbVm673Vi6zfqDT2_lYrTtnpryzC2iDx',
    imgAlt: 'Vibrant multi-vendor marketplace website layout',
  },
  {
    title: 'AI Core',
    category: 'Neural Network UI',
    accentClass: 'text-tertiary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAppsQGGztrUo0rolLIXq2zW6FSDUlg-ZH2fS24QFYTevMwgk5ZNy-lJTk8qzhM8eUpmRgLHRc7l7LxY0k8JSOlNkoTtGAMhjzVokctgf4sb01OsSBcCJtMdwxzAzKqdEqtWOR56V5R4S2FIproO8NymanqxZuHQB9HIWg3hoGlwGoWZAFKTPH5iriAkqtjl1qlVyxOnxl7hGjPuk8NgRV86PqtRGtvvFBafAAC8N73X4GotgJA0cS9_bjLZlOzT0DFc4G9Ej19Hf1G',
    imgAlt: 'Cyberpunk style artificial intelligence interface',
  },
]

function PortfolioView() {
  return (
    <section className="py-32 px-8" id="portafolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Explora nuestro trabajo
          </h2>
          <div className="flex gap-4">
            <span className="px-6 py-2 rounded-full glass-card text-primary font-bold border-primary/20 cursor-pointer">
              Todos
            </span>
            <span className="px-6 py-2 rounded-full glass-card text-on-surface/50 hover:text-on-surface cursor-pointer">
              Web Apps
            </span>
            <span className="px-6 py-2 rounded-full glass-card text-on-surface/50 hover:text-on-surface cursor-pointer">
              Mobile
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] glass-card"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                src={item.image}
                alt={item.imgAlt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 p-8">
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className={`${item.accentClass} text-sm font-label tracking-widest uppercase`}>
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioView
