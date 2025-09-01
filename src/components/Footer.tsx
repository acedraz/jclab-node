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
import Emergency from "./emergency/Emergency";
import {
    getCompanyFundationDate,
    getCompanyYearsSinceFundation,
    getCompanyData,
    getSocialValue,
    getAddress
} from '../utils/Company';
import SocialMedia from "./button/SocialMedia.tsx";
import servicesData from './services/services.json';
import Hours from "./services/Hours.tsx";

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
                <h3 className="text-xl font-bold">{ getCompanyData().name_fantasy }</h3>
                <p className="text-gray-400 text-sm">Excelência em Análises</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Há mais de {getCompanyYearsSinceFundation()} anos oferecendo diagnósticos precisos e confiáveis
              com tecnologia de ponta e atendimento humanizado.
            </p>
              { SocialMedia("flex space-x-4", 'w-10 h-10 bg-gray-800 hover:bg-medical-600 rounded-lg flex items-center justify-center transition-colors duration-300') }
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {servicesData.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-medical-400 transition-colors duration-300">
                    {service.title}
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
                <span className="text-gray-300">{ getSocialValue('phone') }</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-400" />
                <span className="text-gray-300">{ getSocialValue('email') }</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-400 mt-1" />
                <span className="text-gray-300">
                  { getAddress().street }, { getAddress().number }<br />
                    { getAddress().neighborhood } - { getAddress().city }, { getAddress().state_iso2code }<br />
                        CEP: { getAddress().zipCode }
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-medical-400 mt-1" />
                  { Hours("text-gray-300") }
              </div>
            </div>

            {/* Emergency Contact */}
            {/*  { Emergency() }*/}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {new Date().getFullYear()} { getCompanyData().name }. Todos os direitos reservados.</span>
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