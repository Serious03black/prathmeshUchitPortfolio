
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Heart, Coffee, BookOpen, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-card',
        { opacity: 0, y: 50, rotateX: 15 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learner",
      description: "I believe in continuous learning and staying updated with the latest web technologies and best practices."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I enjoy breaking down complex problems into simple, elegant solutions that users love to interact with."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Knowledge Sharer",
      description: "I love sharing my knowledge through mentoring and contributing to the developer community."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Oriented",
      description: "Focused on delivering high-quality solutions that meet both user needs and business objectives."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm Prathmesh Somnath Uchit, a dedicated JavaScript developer with a passion for 
                creating beautiful, functional, and user-friendly web applications. My journey in web 
                development started with curiosity and has evolved into a love for clean code and 
                innovative solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in modern JavaScript frameworks like React.js, and I have a keen interest 
                in web animations using GSAP and Locomotive.js. I believe that great user experiences 
                come from the perfect blend of functionality, performance, and delightful interactions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with fellow developers. I'm always 
                excited about new challenges and opportunities to grow.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['JavaScript', 'React.js', 'HTML5', 'CSS3', 'GSAP', 'Node.js'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200 hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl text-white">👨‍💻</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">2+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="about-card group p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
