import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Palette, 
  Database, 
  Zap, 
  BookOpen, 
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Users,
  Rocket,
  Heart
} from 'lucide-react';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

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

      // Floating animation for tech icons
      gsap.to('.floating-icon', {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technicalSkills = [
    { name: 'JavaScript (ES6+)', level: 95, icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js & Hooks', level: 92, icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', level: 88, icon: '🔷', color: 'from-blue-600 to-indigo-600' },
    { name: 'HTML5 & Semantic Web', level: 96, icon: '🧱', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3 & Sass', level: 94, icon: '🎨', color: 'from-pink-500 to-purple-600' },
    { name: 'GSAP & Animations', level: 85, icon: '✨', color: 'from-green-400 to-teal-500' },
    { name: 'Node.js & Express', level: 80, icon: '🟢', color: 'from-green-600 to-emerald-600' },
    { name: 'Git & Version Control', level: 89, icon: '📚', color: 'from-gray-600 to-gray-800' }
  ];

  const frameworks = [
    { name: 'React.js', icon: '⚛️', proficiency: 'Expert' },
    { name: 'Next.js', icon: '▲', proficiency: 'Advanced' },
    { name: 'Vue.js', icon: '🟢', proficiency: 'Intermediate' },
    { name: 'Express.js', icon: '🚀', proficiency: 'Advanced' },
    { name: 'Tailwind CSS', icon: '🎨', proficiency: 'Expert' },
    { name: 'Bootstrap', icon: '🅱️', proficiency: 'Advanced' }
  ];

  const animationLibraries = [
    { name: 'GSAP', icon: '✨', description: 'High-performance animations' },
    { name: 'Locomotive.js', icon: '🚂', description: 'Smooth scrolling effects' },
    { name: 'Framer Motion', icon: '🎭', description: 'React animation library' },
    { name: 'Lottie', icon: '🎨', description: 'Vector animations' },
    { name: 'Three.js', icon: '🎲', description: '3D web graphics' },
    { name: 'CSS Animations', icon: '💫', description: 'Native CSS transitions' }
  ];

  const learningAreas = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Modern Frontend",
      description: "React 18, Next.js 13, Server Components",
      progress: 90,
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & APIs",
      description: "Node.js, GraphQL, REST APIs",
      progress: 75,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Core Web Vitals, Optimization",
      progress: 85,
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Systems",
      description: "Component Libraries, Figma",
      progress: 80,
      color: "from-pink-500 to-purple-600"
    }
  ];

  const softSkills = [
    { 
      icon: <BookOpen className="w-5 h-5" />, 
      skill: 'Continuous Learning', 
      description: 'Always exploring new technologies and methodologies' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      skill: 'Team Collaboration', 
      description: 'Effective communication and pair programming' 
    },
    { 
      icon: <Lightbulb className="w-5 h-5" />, 
      skill: 'Problem Solving', 
      description: 'Breaking complex challenges into simple solutions' 
    },
    { 
      icon: <Target className="w-5 h-5" />, 
      skill: 'Goal Oriented', 
      description: 'Focused delivery and meeting project objectives' 
    },
    { 
      icon: <TrendingUp className="w-5 h-5" />, 
      skill: 'Adaptability', 
      description: 'Quick adaptation to new tools and environments' 
    },
    { 
      icon: <Heart className="w-5 h-5" />, 
      skill: 'Passion for Quality', 
      description: 'Committed to excellence and best practices' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <main className="pt-20">
        <section ref={sectionRef} className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-20">
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
                  My <span className="text-gradient">Skills</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  A comprehensive toolkit of modern technologies and methodologies that enable me to create exceptional web experiences and solve complex problems.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-20">
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-12 text-center">
                  Technical Expertise
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.name} className="skill-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-2xl floating-icon`}>
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                            <span className="text-sm text-indigo-600 font-medium">{skill.level}% Proficient</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                          data-progress={`${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Focus Areas */}
              <div className="mb-20">
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-12 text-center">
                  Current Learning Focus
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {learningAreas.map((area, index) => (
                    <div key={area.title} className="skill-card bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                        {area.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`skill-bar h-full bg-gradient-to-r ${area.color} rounded-full`}
                          data-progress={`${area.progress}%`}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2 block">{area.progress}% Complete</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div className="skill-card">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-indigo-600" />
                    Frameworks & Libraries
                  </h3>
                  <div className="space-y-4">
                    {frameworks.map((framework) => (
                      <div 
                        key={framework.name}
                        className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{framework.icon}</span>
                          <span className="font-medium text-gray-900">{framework.name}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          framework.proficiency === 'Expert' ? 'bg-green-100 text-green-700' :
                          framework.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {framework.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skill-card">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-indigo-600" />
                    Animation Libraries
                  </h3>
                  <div className="space-y-4">
                    {animationLibraries.map((lib) => (
                      <div 
                        key={lib.name}
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xl group-hover:scale-110 transition-transform">{lib.icon}</span>
                          <span className="font-medium text-gray-900">{lib.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">{lib.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="mb-20">
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-12 text-center">
                  Professional Skills
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {softSkills.map((item, index) => (
                    <div 
                      key={item.skill}
                      className="skill-card bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                            {item.skill}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Philosophy */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Never Stops</h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                    I believe in continuous learning and staying curious about emerging technologies. 
                    Every project is an opportunity to grow, and every challenge is a chance to innovate. 
                    My goal is to blend technical expertise with creative problem-solving to build solutions that matter.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      See My Projects
                    </button>
                    <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;