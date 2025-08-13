
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        'service_wvx5pao',
        'template_ioye44x',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sqadvocaciaesp@gmail.com'
        },
        'orWPQCrFxJrGVpfcz'
      );

      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada para sqadvocaciaesp@gmail.com. Entraremos em contato em breve.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(51) 98057-0463',
      action: 'tel:+5551980570463'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'sqadvocaciaesp@gmail.com',
      action: 'mailto:sqadvocaciaesp@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Atendimento online de excelência para todo o Brasil',
      action: null
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 8h às 18h',
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Estamos prontos para ouvir seu caso e oferecer a melhor solução jurídica. 
            Agende sua consultoria gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* How to Contact */}
          <Card className="shadow-xl border-0 animate-slide-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">
                Como entrar em contato?
              </h3>
              <p className="text-navy-600 mb-6">
                Nosso escritório atende clientes de todo o Brasil através do WhatsApp, 
                oferecendo atendimento online personalizado e de qualidade.
              </p>
              <ul className="text-navy-600 space-y-3 mb-8">
                <li>• Atendimento via WhatsApp em todo o Brasil</li>
                <li>• Consultas online personalizadas</li>
                <li>• Resposta rápida e eficiente</li>
                <li>• Acompanhamento completo do seu caso</li>
              </ul>
              <Button 
                onClick={() => {
                  const phoneNumber = "5551980570463";
                  const message = "Olá! Gostaria de falar com um advogado.";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg h-auto"
              >
                Falar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-navy-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-navy-200 mt-1">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-navy-200 hover:text-white transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-navy-200">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
