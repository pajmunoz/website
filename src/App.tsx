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
    <div className="sl-page">
      <Header />

      <main className="sl-main">
        <HeroView />
        <FeaturesView />
        <ProcessView />
        <ServicesView />
        <TestimonialsView />
        <PortfolioView />
        <WhyUsView />
        <ContactView />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  )
}

export default App
