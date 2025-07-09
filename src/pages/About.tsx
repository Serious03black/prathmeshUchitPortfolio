import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Coffee, 
  BookOpen, 
  Target, 
  Brain, 
  Code, 
  Zap, 
  Rocket,
  GraduationCap,
  Lightbulb,
  Users,
  Award,
  Palette,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optimized entrance animations
      gsap.fromTo('.about-element',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const coreValues = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Lifelong Learner",
      description: "Every day is a new opportunity to discover, understand, and master something new. Learning isn't just what I do—it's who I am.",
      quote: "The more I learn, the more I realize how much I don't know.",
      bgPattern: "dots"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Problem Solver", 
      description: "I approach challenges like an artist approaches a blank canvas—with curiosity, creativity, and a vision for something beautiful.",
      quote: "Every problem is a puzzle waiting to be solved.",
      bgPattern: "waves"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Craftsperson",
      description: "Writing code is my craft. I believe in creating solutions that are not just functional, but elegant, readable, and maintainable.",
      quote: "Clean code is not written by following a set of rules. Clean code is written by someone who cares.",
      bgPattern: "grid"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Seeker",
      description: "I'm constantly exploring the frontier of what's possible, pushing boundaries, and turning ambitious ideas into reality.",
      quote: "Innovation distinguishes between a leader and a follower.",
      bgPattern: "zigzag"
    }
  ];

  const learningMilestones = [
    {
      period: "The Foundation",
      year: "2018-2022",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Journey",
      description: "Built strong fundamentals in Computer Science, learning algorithms, data structures, and software engineering principles that form the bedrock of my technical knowledge.",
      achievements: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Design", "Software Engineering"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      period: "The Discovery", 
      year: "2020-2021",
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Mastery",
      description: "Discovered my passion for frontend development. Dove deep into React.js ecosystem, modern JavaScript, and the art of creating beautiful user interfaces.",
      achievements: ["React.js Expertise", "Modern JavaScript", "Responsive Design", "Component Architecture"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      period: "The Art",
      year: "2021-2022", 
      icon: <Sparkles className="w-6 h-6" />,
      title: "Animation & Interaction",
      description: "Fell in love with web animations and microinteractions. Mastered GSAP, Locomotive.js, and the subtle art of bringing interfaces to life.",
      achievements: ["GSAP Mastery", "Smooth Scrolling", "Microinteractions", "Performance Optimization"],
      color: "from-purple-500 to-violet-600"
    },
    {
      period: "The Experience",
      year: "2022-Present",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Professional Growth",
      description: "Applied knowledge in real-world projects, learning about client collaboration, agile methodologies, and the balance between innovation and practicality.",
      achievements: ["Client Projects", "Team Collaboration", "Agile Development", "Leadership Skills"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const techMastery = [
    { name: 'JavaScript', level: 95, icon: '⚡', specialty: "Language Mastery" },
    { name: 'React.js', level: 92, icon: '⚛️', specialty: "Component Architecture" },
    { name: 'TypeScript', level: 88, icon: '🔷', specialty: "Type Safety" },
    { name: 'GSAP', level: 90, icon: '✨', specialty: "Animation Excellence" },
    { name: 'CSS3', level: 94, icon: '🎨', specialty: "Design Implementation" },
    { name: 'Node.js', level: 82, icon: '🟢', specialty: "Backend Development" },
    { name: 'Git', level: 89, icon: '📚', specialty: "Version Control" },
    { name: 'Performance', level: 87, icon: '🚀', specialty: "Web Optimization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="pt-20">
        <section ref={sectionRef} className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              
              {/* Hero Section with Calligraphy */}
              <div className="text-center mb-24 about-element">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-script text-8xl text-primary/10">
                    ~
                  </div>
                  <p className="text-script text-xl text-accent mb-4">Let me tell you</p>
                  <h1 className="text-6xl lg:text-8xl font-display font-bold mb-6 brush-stroke">
                    My <span className="text-gradient">Story</span>
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    A journey of continuous learning, creative problem-solving, and passionate coding
                  </p>
                </div>
              </div>

              {/* Personal Introduction */}
              <div className="grid lg:grid-cols-2 gap-20 mb-32 about-element">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-display font-semibold mb-6 ink-splatter">
                      Hello, I'm Prathmesh! 
                      <span className="text-script text-2xl text-accent ml-4">~ creative coder</span>
                    </h2>
                    
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                      <p>
                        I'm a <span className="font-semibold text-primary">software developer</span> who believes that 
                        code is poetry, problems are puzzles, and every project is an opportunity to learn something new.
                      </p>

                      <p>
                        My journey started with curiosity—<em className="text-elegant">why do things work the way they do?</em> 
                        This led me down the rabbit hole of programming, where I discovered my love for creating 
                        digital experiences that are both functional and beautiful.
                      </p>

                      <p>
                        What sets me apart is my <span className="font-semibold text-accent">passion for learning</span>. 
                        I don't just write code; I study it, I craft it, I refine it. Every project teaches me something new, 
                        and every challenge makes me a better developer.
                      </p>
                    </div>

                    <div className="mt-8 p-6 card-ink">
                      <p className="text-script text-lg text-accent mb-2">"Learning never exhausts the mind"</p>
                      <p className="text-sm text-muted-foreground">- Leonardo da Vinci</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Tech Showcase */}
                <div className="relative">
                  <div className="card-floating p-8 h-full">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Tech Mastery</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {techMastery.map((tech) => (
                        <div key={tech.name} className="card-morphic p-4 group gpu-accelerated">
                          <div className="text-center">
                            <span className="text-4xl mb-3 block animate-float-gentle">{tech.icon}</span>
                            <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                            <p className="text-xs text-muted-foreground mb-3">{tech.specialty}</p>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full smooth-transition"
                                style={{ width: `${tech.level}%` }}
                              />
                            </div>
                            <span className="text-xs text-primary font-medium mt-1 block">{tech.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values - Unique Design */}
              <div className="mb-32 about-element">
                <h2 className="text-4xl font-display font-semibold text-center mb-16 brush-stroke">
                  What Drives Me
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {coreValues.map((value, index) => (
                    <div key={value.title} className="card-floating group relative overflow-hidden p-8 gpu-accelerated">
                      {/* Decorative background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        {value.bgPattern === 'dots' && (
                          <div className="w-full h-full" style={{
                            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }} />
                        )}
                        {value.bgPattern === 'waves' && (
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <path d="M0,50 Q25,25 50,50 T100,50 V100 H0 Z" fill="currentColor" />
                          </svg>
                        )}
                        {value.bgPattern === 'grid' && (
                          <div className="w-full h-full" style={{
                            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }} />
                        )}
                        {value.bgPattern === 'zigzag' && (
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <polygon points="0,0 50,50 100,0 100,25 50,75 0,25" fill="currentColor" />
                          </svg>
                        )}
                      </div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 smooth-transition">
                          {value.icon}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary smooth-transition">
                          {value.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {value.description}
                        </p>

                        <blockquote className="text-script text-accent border-l-2 border-accent/30 pl-4 italic">
                          {value.quote}
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Journey Timeline */}
              <div className="mb-32 about-element">
                <h2 className="text-4xl font-display font-semibold text-center mb-16 brush-stroke">
                  My Learning Journey
                </h2>
                <div className="space-y-12">
                  {learningMilestones.map((milestone, index) => (
                    <div key={milestone.title} className="relative">
                      {/* Timeline line */}
                      {index < learningMilestones.length - 1 && (
                        <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-accent opacity-30" />
                      )}
                      
                      <div className="card-ink flex gap-8 p-8 gpu-accelerated">
                        {/* Timeline marker */}
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {milestone.icon}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-script text-lg text-accent">{milestone.period}</span>
                            <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                              {milestone.year}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-semibold mb-3">{milestone.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{milestone.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {milestone.achievements.map((achievement) => (
                              <span 
                                key={achievement}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center about-element">
                <div className="card-floating p-12 max-w-4xl mx-auto relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 text-script text-6xl text-primary/10">{"{"}</div>
                  <div className="absolute bottom-8 right-8 text-script text-6xl text-accent/10">{"}"}</div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-float-gentle">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-3xl font-display font-semibold mb-6">
                      Let's Create Something <span className="text-gradient">Amazing</span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                      I'm always excited to collaborate on new projects and challenges. Let's combine our ideas 
                      and build something that makes a difference.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="card-morphic px-8 py-4 font-medium smooth-transition group">
                        <span className="flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-500 group-hover:scale-110 smooth-transition" />
                          Let's Collaborate
                        </span>
                      </button>
                      <button className="card-floating px-8 py-4 font-medium smooth-transition">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          View My Projects
                        </span>
                      </button>
                    </div>
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

export default About;