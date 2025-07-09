
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, Lightbulb, Code2, TestTube, Rocket, Users } from 'lucide-react';

const ProblemSolving = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.approach-step',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate connecting lines
      gsap.fromTo('.connecting-line',
        { width: '0%' },
        {
          width: '100%',
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const approachSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Understand",
      description: "I start by thoroughly understanding the problem, user needs, and business requirements. This includes research, stakeholder interviews, and requirement analysis.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ideate",
      description: "Brainstorming multiple solutions, exploring different approaches, and considering various technologies that could solve the problem effectively.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Prototype",
      description: "Creating rapid prototypes to validate ideas, test user flows, and gather early feedback before committing to full development.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Test",
      description: "Rigorous testing including unit tests, integration tests, user testing, and performance optimization to ensure quality delivery.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy",
      description: "Careful deployment with monitoring, documentation, and performance tracking to ensure smooth launches and maintainability.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Iterate",
      description: "Gathering user feedback, monitoring performance, and continuously improving the solution based on real-world usage and data.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const principles = [
    {
      title: "User-Centric Design",
      description: "Every solution starts with understanding the user's perspective and creating experiences that solve real problems."
    },
    {
      title: "Clean Code Philosophy",
      description: "Writing maintainable, readable, and efficient code that other developers can easily understand and extend."
    },
    {
      title: "Performance First",
      description: "Optimizing for speed and efficiency to ensure smooth user experiences across all devices and connections."
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and best practices to deliver modern, innovative solutions."
    }
  ];

  return (
    <section id="problem-solving" ref={sectionRef} className="section py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              How I <span className="text-gradient">Solve Problems</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My systematic approach to tackling challenges, from understanding the problem to delivering scalable solutions.
            </p>
          </div>

          {/* Approach Steps */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">My Development Process</h3>
            
            <div className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  {approachSteps.slice(0, 3).map((step, index) => (
                    <div key={index} className="approach-step relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                          {step.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      {index < 2 && (
                        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-10">
                          <div className="connecting-line h-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-8">
                  {approachSteps.slice(3, 6).map((step, index) => (
                    <div key={index + 3} className="approach-step relative">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                          {step.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      {index < 2 && (
                        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-10">
                          <div className="connecting-line h-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden grid md:grid-cols-2 gap-6">
                {approachSteps.map((step, index) => (
                  <div key={index} className="approach-step">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Core Principles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="approach-step group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Solve Your Next Challenge?</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's work together to turn your ideas into innovative digital solutions that make a real impact.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
