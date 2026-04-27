import { useState } from 'react';
import { Globe, Smartphone, Laptop, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  details: string[];
  gradient: string;
}

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Development',
      description: 'Stunning, responsive websites that captivate and convert.',
      details: [
        'Custom responsive design',
        'SEO optimization',
        'Performance optimization',
        'CMS integration',
        'E-commerce solutions',
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Web App Development',
      description: 'Powerful web applications that scale with your business.',
      details: [
        'Modern frameworks (React, Next.js)',
        'Real-time features',
        'Cloud deployment',
        'API integration',
        'Database architecture',
      ],
      gradient: 'from-blue-500 to-violet-500',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native iOS & Android apps that users love.',
      details: [
        'iOS & Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'FREE Tech Consulting',
      description: 'Expert guidance to turn your ideas into reality.',
      details: [
        'Project scope planning',
        'Technology recommendations',
        'Architecture design',
        'Cost estimation',
        'Timeline planning',
      ],
      gradient: 'from-cyan-500 to-violet-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to launch, we deliver cutting-edge solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-violet-500/5 rounded-xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-lg text-white`}>
                    {service.icon}
                  </div>
                  <button className="text-cyan-400">
                    {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>

                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
