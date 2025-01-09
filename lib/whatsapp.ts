
const WHATSAPP_NUMBER = "6285969013111";

export interface WhatsAppMessage {
  productName?: string;
  productId?: number;
  customMessage?: string;
}

export function generateWhatsAppUrl({ productName, productId, customMessage }: WhatsAppMessage): string {
  const baseUrl = "https://wa.me";
  let message = "Halo LaRose Florist, ";

  if (productName && productId) {
    message += `saya tertarik dengan ${productName} (ID: ${productId}). `;
  }

  if (customMessage) {
    message += customMessage;
  }

  return `${baseUrl}/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
