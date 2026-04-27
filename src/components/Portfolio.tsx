import { ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  gradient: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Full-featured online store with payment processing, inventory management, and analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      description: 'iOS and Android app for tracking workouts, nutrition, and health metrics.',
      tech: ['React Native', 'Firebase', 'HealthKit'],
      gradient: 'from-blue-500 to-violet-500',
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Application',
      description: 'Property listing platform with advanced search, virtual tours, and agent dashboard.',
      tech: ['Next.js', 'PostgreSQL', 'AWS'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'On-demand food delivery platform with real-time tracking and payment integration.',
      tech: ['Flutter', 'Node.js', 'Google Maps API'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard for SaaS businesses with real-time metrics and reporting.',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Social Media App',
      category: 'Mobile App',
      description: 'Social networking platform with messaging, stories, and content sharing.',
      tech: ['Swift', 'Kotlin', 'GraphQL'],
      gradient: 'from-violet-500 to-pink-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-cyan-400 font-semibold">{project.category}</span>
                  <Code className="w-5 h-5 text-violet-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-transparent to-transparent group-hover:from-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
