import { Award, Target, Zap } from 'lucide-react';
import SelfPortrait from '../assets/self-portrait.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                About The A-List Geeks
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are a premier software engineering team dedicated to transforming innovative ideas into
              powerful digital solutions. Our mission is to empower businesses and entrepreneurs with
              cutting-edge technology that drives growth and success.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With expertise spanning web development, mobile applications, and custom software solutions,
              we bring your vision to life with precision, creativity, and technical excellence.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400">
                    To deliver world-class software solutions that exceed expectations and drive meaningful results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                  <p className="text-gray-400">
                    We combine technical expertise with creative problem-solving to build solutions that work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    <img src={SelfPortrait} alt="LePaul Love" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">LePaul Love</h3>
                    <p className="text-cyan-400">Software Engineer / Owner</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  With years of experience in software engineering and a passion for innovation,
                  LePaul leads The A-List Geeks in delivering exceptional digital solutions.
                  Specializing in full-stack development, mobile applications, and turning ideas
                  into production-ready products.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <Award className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <Zap className="w-6 h-6 text-violet-400 mb-2" />
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
