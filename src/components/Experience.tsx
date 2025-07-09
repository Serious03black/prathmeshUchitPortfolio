
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the timeline line
      gsap.fromTo('.timeline-line',
        { height: '0%' },
        {
          height: '100%',
          duration: 2,
          ease: "power2.out",
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

  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Developing responsive web applications using React.js and modern JavaScript. Implementing GSAP animations and optimizing performance for better user experience.',
      skills: ['React.js', 'JavaScript', 'GSAP', 'CSS3', 'Git']
    },
    {
      type: 'internship',
      title: 'Web Development Intern',
      company: 'Digital Agency',
      location: 'Mumbai, India',
      period: '2021 - 2022',
      description: 'Assisted in building client websites and learned modern web development practices. Contributed to UI/UX improvements and responsive design implementations.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery']
    },
    {
      type: 'freelance',
      title: 'Freelance Developer',
      company: 'Various Clients',
      location: 'Remote',
      period: '2020 - 2021',
      description: 'Worked with small businesses to create custom websites and web applications. Focused on delivering clean, maintainable code and exceptional user experiences.',
      skills: ['WordPress', 'JavaScript', 'PHP', 'MySQL', 'CSS3']
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University Name',
      location: 'India',
      period: '2018 - 2022',
      description: 'Studied computer science fundamentals, algorithms, data structures, and web technologies. Participated in coding competitions and tech events.',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Database', 'Software Engineering']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'internship':
        return <Briefcase className="w-5 h-5" />;
      case 'freelance':
        return <Briefcase className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-green-500 to-emerald-600';
      case 'internship':
        return 'from-blue-500 to-indigo-600';
      case 'freelance':
        return 'from-purple-500 to-violet-600';
      case 'education':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="section py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of my professional growth, learning experiences, and the path that led me to where I am today.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gray-200 h-full">
              <div className="timeline-line w-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {getIcon(exp.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-indigo-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
              { number: '8+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
