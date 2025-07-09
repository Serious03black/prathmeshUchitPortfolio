import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { opacity: 0, y: 100, rotateX: 15 },
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

      // Hover animations for project cards
      gsap.utils.toArray('.project-card').forEach((card: any) => {
        const image = card.querySelector('.project-image');
        const overlay = card.querySelector('.project-overlay');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 1.1, duration: 0.3 });
          gsap.to(overlay, { opacity: 1, duration: 0.3 });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.3 });
          gsap.to(overlay, { opacity: 0, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Interactive Dashboard",
      description: "A modern React dashboard with real-time data visualization, featuring smooth animations and responsive design.",
      tech: ["React.js", "GSAP", "Chart.js", "Tailwind CSS"],
      image: "🎯",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with cart management, payment integration, and admin panel.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Animation Showcase",
      description: "A creative portfolio showcasing various GSAP animations and Locomotive.js scroll effects.",
      tech: ["Vanilla JS", "GSAP", "Locomotive.js", "CSS3"],
      image: "✨",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality and team features.",
      tech: ["React.js", "TypeScript", "Firebase", "Framer Motion"],
      image: "📋",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and animated weather icons.",
      tech: ["React.js", "OpenWeather API", "CSS3", "PWA"],
      image: "🌤️",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Creative developer portfolio with smooth animations and modern design principles.",
      tech: ["React.js", "GSAP", "Tailwind CSS", "Locomotive.js"],
      image: "💼",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" ref={sectionRef} className="section py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work, featuring interactive web applications built with modern technologies and creative problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="project-image w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>
                  <div className="project-overlay absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center gap-4">
                    <a 
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-indigo-600 border border-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div 
                  key={project.title}
                  className="project-card group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl">
                      {project.image}
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.liveUrl}
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
