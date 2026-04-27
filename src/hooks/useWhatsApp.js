export const WHATSAPP_NUMBER = '551132589351';

export const openWhatsApp = (message = 'Olá! Vim pelo site da Foto Ferrara e gostaria de mais informações.') => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
};

export const openWhatsAppProduct = (productName) => {
  const message = `Olá! Vim pelo site da Foto Ferrara e tenho interesse no produto: *${productName}*. Poderia me dar mais informações?`;
  openWhatsApp(message);
};
