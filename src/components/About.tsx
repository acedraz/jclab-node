import React from 'react';
import { Users, Target, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "50K+", label: "Exames Realizados" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "24h", label: "Resultados Rápidos" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão",
      description: "Resultados confiáveis com tecnologia de ponta e controle de qualidade rigoroso."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado com foco no bem-estar e conforto do paciente."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Investimento contínuo em equipamentos modernos e metodologias avançadas."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excelência",
      description: "Compromisso com a qualidade em todos os processos e serviços oferecidos."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre o 
                <span className="text-medical-600 block">JC Laboratórios</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Desde 2003, o JC Laboratórios tem sido referência em análises clínicas, 
                oferecendo diagnósticos precisos e atendimento de excelência para milhares 
                de pacientes em São Paulo.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é contribuir para a saúde e bem-estar das pessoas através de 
                exames laboratoriais de alta qualidade, realizados por profissionais 
                especializados e equipamentos de última geração.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-medical-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe de profissionais do JC Laboratórios"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-health-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-xs">Certificado</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam nossa atuação e garantem a excelência em todos os serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;