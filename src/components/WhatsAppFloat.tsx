import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5551980570463"; // Número do WhatsApp - (51) 9 8057-0463
    const message = "Olá! Gostaria de agendar uma consultoria gratuita.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;