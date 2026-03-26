import { useState, type FormEvent } from 'react'

type ContactFormState = {
  email: string
  message: string
  name: string
}

type SubmitStatus = 'error' | 'idle' | 'loading' | 'success'

const initialContactForm: ContactFormState = { email: '', message: '', name: '' }

const CONTACT_API_URL = 'https://portfolio-server-nine-green.vercel.app/api/send-email'

function ContactView() {
  const [contact, setContact] = useState<ContactFormState>(initialContactForm)
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitStatus('loading')
    setFeedbackMessage('')

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: contact.email,
          message: contact.message,
          name: contact.name,
          subject: 'Nuevo lead desde SierraLabs website',
        }),
      })

      const data = (await response.json()) as { error?: string; message?: string }

      if (!response.ok) {
        setSubmitStatus('error')
        setFeedbackMessage(data.error ?? 'No se pudo enviar el formulario.')
        return
      }

      setSubmitStatus('success')
      setFeedbackMessage(data.message ?? 'Mensaje enviado con éxito. Te contactaremos pronto.')
      setContact(initialContactForm)
    } catch {
      setSubmitStatus('error')
      setFeedbackMessage('Error de red. Inténtalo de nuevo en unos minutos.')
    }
  }

  return (
    <section className="py-32 px-8 bg-surface-container-low relative overflow-hidden" id="contacto">
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] -z-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div data-anim="contact-copy">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter">
              ¿Listo?{' '}
              <br />
              <span className="text-secondary">Hagámoslo</span>
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 leading-relaxed">
              Cuéntanos tu idea y te daremos una hoja de ruta técnica en menos de 24 horas.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">alternate_email</span>
                <span>marketing@sierralabs.digital</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Quito, Ecuador</span>
              </div>
            </div>
          </div>

          <div data-anim="contact-form" className="glass-card p-10 rounded-3xl">
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="space-y-4">
                <label className="block text-sm font-label uppercase tracking-widest text-on-surface/60">
                  Nombre completo
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 transition-colors"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  required
                  disabled={submitStatus === 'loading'}
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-label uppercase tracking-widest text-on-surface/60">
                  Email corporativo
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 transition-colors"
                  placeholder="john@empresa.com"
                  type="email"
                  name="email"
                  required
                  disabled={submitStatus === 'loading'}
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-label uppercase tracking-widest text-on-surface/60">
                  Mensaje
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 transition-colors"
                  placeholder="Cuéntanos un poco sobre tu proyecto..."
                  rows={3}
                  name="message"
                  required
                  disabled={submitStatus === 'loading'}
                  value={contact.message}
                  onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
                />
              </div>

              <button
                className="w-full py-4 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-black rounded-xl hover:shadow-[0_0_40px_rgba(255,183,125,0.2)] transition-all disabled:opacity-50"
                disabled={submitStatus === 'loading'}
                type="submit"
              >
                {submitStatus === 'loading' ? 'Enviando...' : 'Enviar propuesta'}
              </button>

              {submitStatus !== 'idle' && (
                <p
                  className={`text-sm text-center mt-4 ${
                    submitStatus === 'success' ? 'text-primary' : 'text-error'
                  }`}
                  role="status"
                >
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactView
