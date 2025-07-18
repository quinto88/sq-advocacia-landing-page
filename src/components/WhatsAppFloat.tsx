const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5511999999999"; // Número do WhatsApp
    const message = "Olá! Gostaria de agendar uma consultoria gratuita.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 animate-[pulse_2s_ease-in-out_infinite]"
      aria-label="Conversar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/695c29b8-b10c-4a7a-8635-59eacd1c4eba.png" 
        alt="WhatsApp" 
        className="w-14 h-14 drop-shadow-lg"
      />
    </button>
  );
};

export default WhatsAppFloat;