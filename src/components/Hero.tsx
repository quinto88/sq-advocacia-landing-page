import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-navy-50 to-white pt-20">
      <div className="container-width section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-navy-900 leading-tight">
                Excelência em
                <span className="block text-navy-700">Advocacia</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-600 leading-relaxed max-w-2xl">
                Soluções jurídicas personalizadas com ética, compromisso e resultados efetivos. 
                Protegemos seus direitos com a experiência que você merece.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('contato')} className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-3 text-lg h-auto group">
                Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('servicos')} variant="outline" className="border-navy-300 text-navy-700 hover:bg-navy-50 px-8 py-3 text-lg h-auto">
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-navy-600" />
                </div>
                <div className="text-2xl font-bold text-navy-900">5+</div>
                <div className="text-sm text-navy-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-navy-600" />
                </div>
                <div className="text-2xl font-bold text-navy-900">100+</div>
                <div className="text-sm text-navy-600">Casos Resolvidos</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img src="/lovable-uploads/bca97286-c78d-43cb-b01e-5546d3c8b584.png" alt="SQ Advocacia" className="w-full max-w-md mx-auto" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-navy-100/50 to-navy-200/30 rounded-3xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-navy-50/50 to-navy-100/30 rounded-3xl transform -rotate-2 -z-20"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;