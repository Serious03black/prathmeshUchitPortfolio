
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars
      gsap.fromTo('.skill-bar',
        { width: '0%' },
        {
          width: (index, target) => target.getAttribute('data-progress'),
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate skill cards
      gsap.fromTo('.skill-card',
        { opacity: 0, scale: 0.8, rotateY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
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

  const technicalSkills = [
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'HTML5', level: 95, icon: '🧱' },
    { name: 'CSS3', level: 90, icon: '🎨' },
    { name: 'GSAP', level: 80, icon: '✨' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'TypeScript', level: 70, icon: '💙' },
    { name: 'Git', level: 85, icon: '📚' }
  ];

  const toolsAndLibraries = [
    'Locomotive.js',
    'Three.js',
    'Framer Motion',
    'Tailwind CSS',
    'Webpack',
    'Vite',
    'ESLint',
    'Prettier'
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Creative Thinking'
  ];

  return (
    <section id="skills" ref={sectionRef} className="section py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies that enable me to create exceptional web experiences.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="skill-bar h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300"
                      data-progress={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Libraries */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="skill-card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tools & Libraries</h3>
              <div className="grid grid-cols-2 gap-3">
                {toolsAndLibraries.map((tool) => (
                  <div 
                    key={tool}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center group hover:border-indigo-200"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Soft Skills</h3>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group hover:border-indigo-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="skill-card bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Philosophy</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous learning and staying curious about emerging technologies. 
                Every project is an opportunity to grow, and every challenge is a chance to innovate. 
                My goal is to blend technical expertise with creative problem-solving to build solutions that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
