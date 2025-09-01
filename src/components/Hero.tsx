import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import { getCompanyYearsSinceFundation } from '../utils/Company'
import ScheduleExamButton from './button/ScheduleExam';
import SeeResultsButton from './button/SeeResults';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-medical-50 to-primary-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Excelência em
                <span className="text-medical-600 block">Análises Clínicas</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Há mais de {getCompanyYearsSinceFundation()} anos oferecendo diagnósticos precisos e confiáveis com tecnologia de ponta e atendimento humanizado.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Shield className="w-6 h-6 text-health-600" />
                <span className="font-medium text-gray-800">Segurança</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-medical-600" />
                <span className="font-medium text-gray-800">Agilidade</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Award className="w-6 h-6 text-primary-600" />
                <span className="font-medium text-gray-800">Qualidade</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                { ScheduleExamButton('bg-medical-600 text-white px-8 py-4 rounded-lg hover:bg-medical-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1', 'w-5 h-5') }
                { SeeResultsButton('border-2 border-medical-600 text-medical-600 px-8 py-4 rounded-lg hover:bg-medical-600 hover:text-white transition-all duration-300 font-medium') }
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/blood_analysis.jpg"
                alt="Laboratório moderno com equipamentos de análise"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-600">{getCompanyYearsSinceFundation()}+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;