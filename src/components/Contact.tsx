import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Target,
  Users,
  Lightbulb,
  Trophy
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão",
      description: "Resultados confiáveis com tecnologia de ponta e rigoroso controle de qualidade."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento",
      description: "Equipe especializada dedicada ao seu bem-estar e comodidade."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre atualizados com as mais modernas técnicas e equipamentos."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excelência",
      description: "Mais de 20 anos de experiência e reconhecimento no mercado."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo. Entre em contato conosco para agendar 
            seus exames ou esclarecer dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 3456-7890</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@jclaboratorio.com.br</p>
                    <p className="text-gray-600">resultados@jclaboratorio.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua das Análises, 123<br />
                      Vila Médica - São Paulo, SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 6:00 - 18:00<br />
                      Sábado: 7:00 - 12:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300 resize-none"
                  placeholder="Como podemos ajudá-lo?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-medical-600 text-white px-8 py-4 rounded-lg hover:bg-medical-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nossa Localização
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Mapa Interativo</p>
                <p className="text-sm">Rua das Análises, 123 - Vila Médica, SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que Escolher o JC Laboratórios?
            </h3>
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

export default Contact;