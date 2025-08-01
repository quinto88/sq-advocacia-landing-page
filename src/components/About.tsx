
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos sempre a melhor solução jurídica para cada caso, com precisão e eficiência.'
    },
    {
      icon: Heart,
      title: 'Ética',
      description: 'Mantemos os mais altos padrões éticos em todas as nossas relações profissionais.'
    },
    {
      icon: Eye,
      title: 'Transparência',
      description: 'Comunicação clara e honesta com nossos clientes em todas as etapas do processo.'
    },
    {
      icon: CheckCircle,
      title: 'Compromisso',
      description: 'Dedicação integral aos interesses de nossos clientes e aos prazos estabelecidos.'
    }
  ];

  return (
    <>
      <section id="sobre" className="py-20 bg-navy-50">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-6">
                  Sobre Nossa Equipe
                </h2>
                <div className="space-y-4 text-navy-700 leading-relaxed">
                  <p>
                    Fundada com o propósito de oferecer serviços jurídicos de excelência, 
                    nossa advocacia se consolidou como referência no mercado por sua abordagem 
                    inovadora e compromisso com resultados efetivos.
                  </p>
                  <p>
                    Nossa equipe é composta por profissionais altamente qualificados, 
                    com vasta experiência em diversas áreas do direito, sempre atualizados 
                    com as mais recentes mudanças na legislação e jurisprudência.
                  </p>
                  <p>
                    Acreditamos que cada cliente é único, por isso desenvolvemos estratégias 
                    personalizadas que atendem às necessidades específicas de cada caso, 
                    sempre priorizando a ética, transparência e eficiência.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 font-playfair">
                  Nossa Missão
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  Fornecer assessoria jurídica de qualidade superior, defendendo os direitos 
                  de nossos clientes com dedicação, ética e excelência técnica, contribuindo 
                  para a construção de uma sociedade mais justa.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-8">
                Nossos Valores
              </h3>
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-navy-600 mt-1">
                      <value.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-navy-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação do Dr. Gustavo Quinto */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Foto */}
            <div className="order-2 lg:order-1 animate-slide-in-left flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-80 h-80">
                <img 
                  src="/lovable-uploads/ed509e90-4001-46d7-9cd6-ac474e1acfd1.png" 
                  alt="Dr. Gustavo Quinto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Informações */}
            <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-6">
                  Dr. Gustavo Quinto
                </h2>
                <div className="space-y-4 text-navy-700 leading-relaxed">
                  <p>
                    Advogado aprovado em diversos concursos jurídicos, com formação sólida 
                    e atuação especializada em litígios complexos.
                  </p>
                  <p>
                    Especialista em direito bancário, imobiliário e do consumidor, 
                    desenvolvendo soluções jurídicas estratégicas e personalizadas.
                  </p>
                  <p>
                    Sua trajetória em concursos públicos e prática advocatícia garantem 
                    um atendimento de excelência, sempre focado na defesa efetiva 
                    dos interesses dos clientes.
                  </p>
                </div>
              </div>

              <div className="bg-navy-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 font-playfair">
                  Áreas de Especialização
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-navy-600" />
                    <span>Defesa em Busca e Apreensão</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-navy-600" />
                    <span>Direito Bancário</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-navy-600" />
                    <span>Consultoria Jurídica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
