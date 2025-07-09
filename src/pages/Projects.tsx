import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Play, Star, Code, Zap, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

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

      // Enhanced hover animations for project cards
      gsap.utils.toArray('.project-card').forEach((card: any) => {
        const image = card.querySelector('.project-image');
        const overlay = card.querySelector('.project-overlay');
        const techBadges = card.querySelectorAll('.tech-badge');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 1.1, duration: 0.4, ease: "power2.out" });
          gsap.to(overlay, { opacity: 1, duration: 0.3 });
          gsap.to(techBadges, { y: -5, stagger: 0.1, duration: 0.3 });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
          gsap.to(overlay, { opacity: 0, duration: 0.3 });
          gsap.to(techBadges, { y: 0, stagger: 0.1, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredProjects = [
    {
      title: "Interactive Learning Dashboard",
      description: "A comprehensive learning management system with real-time progress tracking, interactive courses, and gamification elements. Features include video streaming, quiz systems, and social learning components.",
      detailedDescription: "Built with modern React patterns, this dashboard helps students track their learning journey with beautiful visualizations and interactive elements.",
      tech: ["React.js", "TypeScript", "GSAP", "Chart.js", "Tailwind CSS", "Firebase"],
      image: "🎯",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Full Stack",
      status: "Live",
      learningFocus: ["React Hooks", "Data Visualization", "Real-time Updates"]
    },
    {
      title: "Developer Portfolio Builder",
      description: "A sophisticated portfolio builder for developers with drag-and-drop interface, theme customization, and deployment integration. Includes code syntax highlighting and project showcase templates.",
      detailedDescription: "Empowering developers to create stunning portfolios without coding. Features include template library, custom animations, and one-click deployment.",
      tech: ["Next.js", "React DnD", "Styled Components", "Node.js", "MongoDB", "Vercel"],
      image: "💼",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "SaaS",
      status: "In Development",
      learningFocus: ["Drag & Drop", "Theme System", "Deployment Automation"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Animation Showcase",
      description: "Modern e-commerce platform with cart management, payment integration, and stunning GSAP animations throughout the user journey.",
      tech: ["React.js", "GSAP", "Stripe", "Node.js", "MongoDB"],
      image: "🛒",
      liveUrl: "#",
      githubUrl: "#",
      category: "E-commerce",
      learningFocus: ["Payment Integration", "Cart Management", "Micro-animations"]
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Team collaboration platform with real-time editing, video calls, and project management features built with modern web technologies.",
      tech: ["React.js", "Socket.io", "WebRTC", "Express.js", "PostgreSQL"],
      image: "👥",
      liveUrl: "#",
      githubUrl: "#",
      category: "Productivity",
      learningFocus: ["Real-time Communication", "WebRTC", "Collaborative Editing"]
    },
    {
      title: "AI-Powered Code Assistant",
      description: "Intelligent code completion and suggestion tool that learns from coding patterns and provides contextual help for developers.",
      tech: ["TypeScript", "Machine Learning", "VS Code API", "Python", "TensorFlow"],
      image: "🤖",
      liveUrl: "#",
      githubUrl: "#",
      category: "Developer Tool",
      learningFocus: ["VS Code Extensions", "Machine Learning", "Developer Experience"]
    },
    {
      title: "Interactive Data Visualization",
      description: "Beautiful and interactive data dashboard with D3.js visualizations, real-time updates, and customizable chart components.",
      tech: ["React.js", "D3.js", "WebSocket", "Python", "FastAPI"],
      image: "📊",
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization",
      learningFocus: ["D3.js", "Data Processing", "Real-time Charts"]
    },
    {
      title: "Weather Prediction App",
      description: "Advanced weather application with machine learning predictions, beautiful animations, and location-based forecasts.",
      tech: ["React.js", "PWA", "ML APIs", "GSAP", "OpenWeather API"],
      image: "🌤️",
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile App",
      learningFocus: ["PWA", "ML Integration", "Weather APIs"]
    },
    {
      title: "Creative Animation Studio",
      description: "Portfolio website for creative studio featuring advanced GSAP animations, Locomotive.js smooth scrolling, and interactive elements.",
      tech: ["Vanilla JS", "GSAP", "Locomotive.js", "Three.js", "CSS3"],
      image: "✨",
      liveUrl: "#",
      githubUrl: "#",
      category: "Portfolio",
      learningFocus: ["Advanced Animations", "3D Graphics", "Performance Optimization"]
    }
  ];

  const categories = ["All", "Full Stack", "SaaS", "E-commerce", "Productivity", "Developer Tool", "Data Visualization", "Mobile App", "Portfolio"];

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
                  My <span className="text-gradient">Projects</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  A showcase of my journey in software development, featuring interactive web applications built with modern technologies, creative problem-solving, and a focus on continuous learning.
                </p>
              </div>

              {/* Featured Projects */}
              <div className="mb-20">
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-12 text-center flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                  Featured Projects
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <div 
                      key={project.title}
                      className="project-card group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200"
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="aspect-video relative overflow-hidden">
                        <div className="project-image w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center text-8xl">
                          {project.image}
                        </div>
                        <div className="project-overlay absolute inset-0 bg-black/70 opacity-0 flex items-center justify-center gap-4">
                          <a 
                            href={project.liveUrl}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </a>
                          <a 
                            href={project.githubUrl}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                          <Heart className="w-4 h-4 text-red-500" />
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                          {project.detailedDescription}
                        </p>

                        {/* Learning Focus */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            Key Learning Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.learningFocus.map((focus) => (
                              <span 
                                key={focus}
                                className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium"
                              >
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="tech-badge px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <a 
                            href={project.liveUrl}
                            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group-hover:underline"
                          >
                            <Play className="w-4 h-4" />
                            Live Demo
                          </a>
                          <a 
                            href={project.githubUrl}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                          >
                            <Code className="w-4 h-4" />
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Projects */}
              <div>
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-12 text-center">
                  More Projects & Learning Experiments
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <div 
                      key={project.title}
                      className="project-card group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300 overflow-hidden"
                    >
                      <div className="aspect-video bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center text-4xl">
                        {project.image}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                            {project.category}
                          </span>
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

                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Learning Focus */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-yellow-500" />
                            Learned
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.learningFocus.slice(0, 2).map((focus) => (
                              <span 
                                key={focus}
                                className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded text-xs"
                              >
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span 
                              key={tech}
                              className="tech-badge px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600"
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
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-20">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Want to Build Something Together?</h3>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    I'm always excited to work on new projects and learn from collaborative experiences. 
                    Let's create something amazing and learn together in the process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Start a Project
                    </button>
                    <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300">
                      View GitHub
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

export default Projects;
