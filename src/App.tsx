import { lazy, Suspense } from 'react'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Header from './components/Header'
import { useLandingAnimations } from './hooks/useLandingAnimations'
import './sierralabs.css'
import ContactView from './views/ContactView'
import FeaturesView from './views/FeaturesView'
import HeroView from './views/HeroView'
import PortfolioView from './views/PortfolioView'
import ProcessView from './views/ProcessView'
import ServicesView from './views/ServicesView'
import WhyUsView from './views/WhyUsView'

const ConocenosView = lazy(() => import('./views/ConocenosView'))

function App() {
  useLandingAnimations()
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main>
        <HeroView />
        <FeaturesView />
        <ProcessView />
        <ServicesView />
        <PortfolioView />
        <WhyUsView />
        <Suspense
          fallback={
            <section className="min-h-[min(72vh,520px)] py-32 px-8" id="conocenos">
              <div className="mx-auto max-w-7xl animate-pulse rounded-3xl bg-surface-container-high/30 min-h-[320px]" />
            </section>
          }
        >
          <ConocenosView />
        </Suspense>
        <ContactView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
