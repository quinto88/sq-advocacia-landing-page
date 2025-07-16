import { Scale, FileText, Users, Building, Heart, Landmark, User, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Direito Imobiliário',
      description: 'Proteção completa dos seus direitos em transações e questões imobiliárias.',
      features: ['Revisão de Contratos Imobiliários', 'Anulação/Suspensão de Leilão Judicial/Extrajudicial', 'Defesa em Execução de Imóveis dados em Garantia', 'Usucapião e Regularização Fundiária']
    },
    {
      icon: Landmark,
      title: 'Direito Bancário',
      description: 'Proteção e defesa dos seus direitos nas relações com instituições financeiras.',
      features: ['Análise de Contratos', 'Juros Abusivos', 'Cobrança de Dívidas Bancárias', 'Revisão de Financiamentos']
    },
    {
      icon: User,
      title: 'Direito Civil',
      description: 'Assessoria jurídica completa em questões civis e direitos fundamentais.',
      features: ['Contratos e Obrigações', 'Responsabilidade Civil', 'Direitos da Personalidade', 'Direito de Família e Sucessões']
    },
    {
      icon: ShieldCheck,
      title: 'Direito do Consumidor',
      description: 'Proteção completa dos seus direitos como consumidor.',
      features: ['Indenização contra Companhias Aéreas', 'Negativação Indevida e Cobranças Excessivas', 'Ação contra Produto - Danos Causados por Produto com Defeito ou Serviço Prestado de Forma Incorreta', 'Vício em Produtos e Serviços']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Oferecemos assessoria jurídica especializada em diversas áreas do direito, 
            sempre com foco na excelência e nos melhores resultados para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-navy-600 mb-6 group-hover:text-navy-800 transition-colors">
                  <service.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4 font-playfair">
                  {service.title}
                </h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-navy-500 flex items-center">
                      <div className="w-2 h-2 bg-navy-300 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
