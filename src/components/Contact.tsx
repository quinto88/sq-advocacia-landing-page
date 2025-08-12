
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse em nossos serviços.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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
      content: 'contato@sqadvocacia.com.br',
      action: 'mailto:contato@sqadvocacia.com.br'
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
          {/* Contact Form */}
          <Card className="shadow-xl border-0 animate-slide-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-navy-200 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-navy-200 focus:border-navy-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-navy-200 focus:border-navy-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Assunto *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-navy-200 focus:border-navy-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-navy-200 focus:border-navy-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-navy-800 hover:bg-navy-900 text-white py-3 text-lg h-auto group"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
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

            <Card className="border-navy-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy-900 mb-4">
                  Consultoria Gratuita
                </h4>
                <p className="text-navy-600 mb-4">
                  Oferecemos uma primeira consulta gratuita para avaliar seu caso 
                  e apresentar as melhores opções jurídicas disponíveis.
                </p>
                <ul className="text-sm text-navy-500 space-y-2">
                  <li>• Análise inicial do caso</li>
                  <li>• Orientações jurídicas gerais</li>
                  <li>• Apresentação de estratégias</li>
                  <li>• Orçamento transparente</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
