export const WHATSAPP_NUMBER = '917799012354';
export const DEFAULT_WA_MESSAGE = 'Hi, I want to start a free trial of Apteazy for my apartment';

export const openWhatsApp = (customMessage) => {
  const message = customMessage || DEFAULT_WA_MESSAGE;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
