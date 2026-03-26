import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Header from './components/Header'
import './sierralabs.css'
import ContactView from './views/ContactView'
import FeaturesView from './views/FeaturesView'
import HeroView from './views/HeroView'
import PortfolioView from './views/PortfolioView'
import ProcessView from './views/ProcessView'
import ServicesView from './views/ServicesView'
import TestimonialsView from './views/TestimonialsView'
import WhyUsView from './views/WhyUsView'

function App() {
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
        <TestimonialsView />
        <ContactView />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
