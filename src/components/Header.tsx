import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import {getSocialValue, getAddress, getCompanyData} from '../utils/Company'
import ScheduleExamButton from './button/ScheduleExam';
import SeeResultsButton from './button/SeeResults';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-medical-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{getSocialValue('phone')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                  <span>{getSocialValue('email')}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{getAddress().city}, {getAddress().state_iso2code}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                    <img src="/images/icon.png" alt="JC Logo" className="w-10 h-10 object-contain" />
                </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{getCompanyData()?.name_fantasy}</h1>
                <p className="text-sm text-gray-600">Excelência em Análises</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium">
                Início
              </a>
              <a href="#services" className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium">
                Serviços
              </a>
              <a href="#about" className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium">
                Sobre
              </a>
              <a href="#contact" className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
                {ScheduleExamButton("bg-medical-600 text-white px-6 py-2 rounded-lg hover:bg-medical-700 transition-colors duration-300 font-medium")}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-medical-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </a>
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-medical-600 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
                  { ScheduleExamButton("bg-medical-600 text-white px-6 py-2 rounded-lg hover:bg-medical-700 transition-colors duration-300 font-medium text-left")}
                  { SeeResultsButton('border-2 border-medical-600 text-medical-600 px-8 py-4 rounded-lg hover:bg-medical-600 hover:text-white transition-all duration-300 font-medium')}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;