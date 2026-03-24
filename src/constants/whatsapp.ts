const WHATSAPP_E164 = '+593995352471'

function whatsappDigits(): string {
  return WHATSAPP_E164.replace(/\D/g, '')
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(message)}`
}
