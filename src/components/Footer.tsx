import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">JC Laboratórios</h3>
                <p className="text-gray-400 text-sm">Excelência em Análises</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Há mais de 20 anos oferecendo diagnósticos precisos e confiáveis 
              com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-medical-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-medical-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-medical-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Análises Clínicas",
                "Cardiologia",
                "Neurologia", 
                "Oftalmologia",
                "Check-up Executivo",
                "Medicina do Trabalho"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-medical-400 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#home" },
                { name: "Sobre Nós", href: "#about" },
                { name: "Agendamento", href: "#contact" },
                { name: "Resultados Online", href: "#" },
                { name: "Convênios", href: "#" },
                { name: "Política de Privacidade", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-medical-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-400" />
                <span className="text-gray-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-400" />
                <span className="text-gray-300">contato@jclaboratorio.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-400 mt-1" />
                <span className="text-gray-300">
                  Rua das Análises, 123<br />
                  Vila Médica - São Paulo, SP
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-medical-400 mt-1" />
                <div className="text-gray-300">
                  <p>Seg-Sex: 6:00 - 18:00</p>
                  <p>Sábado: 7:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-red-900 bg-opacity-50 rounded-lg border border-red-700">
              <h5 className="font-semibold text-red-300 mb-2">Emergência 24h</h5>
              <p className="text-red-200 text-sm">(11) 99999-0000</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 JC Laboratórios. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para sua saúde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;