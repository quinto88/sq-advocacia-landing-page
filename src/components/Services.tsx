
import { Scale, FileText, Users, Building, Heart, Landmark, User, Plane, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Defesa em Busca e Apreensão',
      description: 'Proteção dos seus direitos em processos de busca e apreensão de bens.',
      features: ['Defesa em Ações de Busca e Apreensão de Veículos', 'Revisão de Contratos de Financiamento', 'Embargos à Execução', 'Suspensão de Medidas Cautelares']
    },
    {
      icon: Landmark,
      title: 'Direito Bancário',
      description: 'Proteção e defesa dos seus direitos nas relações com instituições financeiras.',
      features: ['Análise de Contratos', 'Juros Abusivos', 'Cobrança de Dívidas Bancárias', 'Revisão de Financiamentos']
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
