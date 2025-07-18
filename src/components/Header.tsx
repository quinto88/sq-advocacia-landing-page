
import { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bca97286-c78d-43cb-b01e-5546d3c8b584.png" 
              alt="SQ Advocacia" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-navy-800 font-bold text-xl font-playfair">SQ Advocacia</span>
              <span className="text-navy-600 text-sm">Excelência em Direito</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-navy-800 hover:bg-navy-900 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Consultoria Gratuita
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-navy-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-navy-700 hover:text-navy-900 font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-navy-700 hover:text-navy-900 font-medium text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-navy-700 hover:text-navy-900 font-medium text-left"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-navy-700 hover:text-navy-900 font-medium text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-navy-800 hover:bg-navy-900 text-white w-full"
              >
                Consultoria Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
