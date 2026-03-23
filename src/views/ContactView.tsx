import { useState, type FormEvent } from 'react'

type ContactFormState = {
  email: string
  message: string
  name: string
}

type SubmitStatus = 'error' | 'idle' | 'loading' | 'success'

const initialContactForm: ContactFormState = {
  email: '',
  message: '',
  name: '',
}

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
        headers: {
          'Content-Type': 'application/json',
        },
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
      setFeedbackMessage(
        data.message ?? 'Mensaje enviado con éxito. Te contactaremos pronto.',
      )
      setContact(initialContactForm)
    } catch {
      setSubmitStatus('error')
      setFeedbackMessage('Error de red. Inténtalo de nuevo en unos minutos.')
    }
  }

  return (
    <section className="sl-contact" id="contacto" aria-labelledby="contactoTitulo">
      <div className="sl-container sl-contactGrid">
        <div className="sl-contactCopy">
          <h2 className="sl-contactTitle" id="contactoTitulo">
            ¿Listo? Hagámoslo
          </h2>
          <p className="sl-contactSubtitle">
            Cuéntanos sobre tu idea y te contactamos para definir el siguiente paso.
          </p>
          <div className="sl-contactQuick">
            <div className="sl-contactQuickItem">
              <div className="sl-contactQuickIcon" aria-hidden="true" />
              Respuesta rápida
            </div>
            <div className="sl-contactQuickItem">
              <div className="sl-contactQuickIcon" aria-hidden="true" />
              Revisiones semanales
            </div>
          </div>
        </div>

        <form className="sl-contactForm" onSubmit={onSubmit}>
          <div className="sl-formRow">
            <label className="sl-label">
              <span className="sl-labelText">Nombre</span>
              <input
                className="sl-input"
                onChange={(event) =>
                  setContact((current) => ({ ...current, name: event.target.value }))
                }
                disabled={submitStatus === 'loading'}
                required
                type="text"
                name="name"
                value={contact.name}
                placeholder="Tu nombre"
              />
            </label>
          </div>
          <div className="sl-formRow">
            <label className="sl-label">
              <span className="sl-labelText">Email</span>
              <input
                className="sl-input"
                onChange={(event) =>
                  setContact((current) => ({ ...current, email: event.target.value }))
                }
                disabled={submitStatus === 'loading'}
                required
                type="email"
                name="email"
                value={contact.email}
                placeholder="tu@email.com"
              />
            </label>
          </div>
          <div className="sl-formRow">
            <label className="sl-label">
              <span className="sl-labelText">Mensaje</span>
              <textarea
                className="sl-textarea"
                name="message"
                onChange={(event) =>
                  setContact((current) => ({ ...current, message: event.target.value }))
                }
                disabled={submitStatus === 'loading'}
                required
                value={contact.message}
                placeholder="¿Qué quieres construir?"
              />
            </label>
          </div>

          <button
            className="sl-primaryBtn sl-formSubmit"
            disabled={submitStatus === 'loading'}
            type="submit"
          >
            {submitStatus === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>

          {submitStatus !== 'idle' && (
            <p
              className={`sl-formFeedback ${
                submitStatus === 'success'
                  ? 'sl-formFeedbackSuccess'
                  : 'sl-formFeedbackError'
              }`}
              role="status"
            >
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactView

