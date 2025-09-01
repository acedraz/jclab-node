import React from 'react';
import servicesData from './services.json';
import howData from './how.json';
import { Service } from '../../model/service';

import {
  Microscope, 
  Heart, 
  Brain, 
  Eye, 
  Stethoscope, 
  Activity,
  CheckCircle,
  Clock
} from 'lucide-react';

const getIcon = (iconName: string, className: string | null = 'w-8 h-8'): React.ReactNode => {
  const icons: { [key: string]: React.ReactNode } = {
    Microscope: <Microscope className={className} />,
    Heart: <Heart className={className} />,
    Brain: <Brain className={className} />,
    Eye: <Eye className={className} />,
    Stethoscope: <Stethoscope className={className} />,
    Activity: <Activity className={className} />,
    Clock: <Clock className={className} />
  };
  return icons[iconName] || <Microscope className={className} />;
};

const Services: React.FC = () => {
  const services: Service[] = servicesData;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de exames e serviços médicos com tecnologia de ponta 
            e profissionais altamente qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-medical-200 group"
            >
              <div className="text-medical-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-health-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h3>
            <p className="text-lg text-gray-600">
              Processo simples e rápido para realizar seus exames
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medical-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-gray-600 text-xs">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;