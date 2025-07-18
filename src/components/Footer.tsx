
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/bca97286-c78d-43cb-b01e-5546d3c8b584.png" 
                alt="SQ Advocacia" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-navy-200 leading-relaxed mb-4">
              Excelência em advocacia com mais de 15 anos de experiência. 
              Defendemos seus direitos com ética, compromisso e dedicação.
            </p>
            <p className="text-sm text-navy-300">
              OAB/SP 123.456 - Inscrito na Ordem dos Advogados do Brasil
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3 text-navy-200">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3 text-navy-200">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contato@sqadvocacia.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>Atendimento online de excelência<br />para todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-navy-300">
            © 2024 SQ Advocacia. Todos os direitos reservados. | 
            <span className="ml-2">
              Desenvolvido com ❤️ para defender seus direitos
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
