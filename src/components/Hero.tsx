import { Code2, Sparkles } from 'lucide-react';
import Logo from '../assets/logo_enhanced.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-blue-950/20 to-black"></div>

      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex justify-center mt-16 mb-8">
          <img src={Logo} alt="Logo" className="w-32 h-32 sm:w-40 sm:h-40" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            THE A-LIST GEEKS
          </span>
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-semibold">
          Your A-List Team for Apps & Ideas.
        </p>

        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <p className="text-lg sm:text-xl text-cyan-400 font-medium">
            Let Our Geeks Level Up Your Tech.
          </p>
          <Code2 className="w-5 h-5 text-violet-400" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
          </a>

          <a
            href="#services"
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg text-cyan-400 font-bold text-lg hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Free Tech Consulting
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-violet-400 mb-2">FREE</div>
            <div className="text-gray-400">Initial Consultation</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
