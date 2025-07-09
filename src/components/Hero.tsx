
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Code, Sparkles, Palette, BookOpen } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reduced animation complexity for performance
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Simplified entrance animations
      tl.fromTo(textRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4"
      );

      // Optimized floating animation - lower frequency
      gsap.to(imageRef.current, {
        y: -10,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Light background with subtle elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '-3s' }}></div>
      </div>

      {/* Black and Gold Calligraphic decorations */}
      <div className="absolute top-20 left-8 text-script text-6xl text-black/10 select-none pointer-events-none">
        &
      </div>
      <div className="absolute bottom-20 right-8 text-script text-5xl rotate-12 select-none pointer-events-none" style={{ color: 'hsl(var(--gold) / 0.1)' }}>
        &lt;/&gt;
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with Black/Gold Accents */}
          <div ref={textRef} className="text-center lg:text-left space-y-8">
            {/* Status badge with black/gold outline */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-black/10">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'hsl(var(--gold))' }}></div>
              <span className="text-sm font-medium text-gray-700">Crafting Digital Experiences</span>
              <Palette className="w-4 h-4" style={{ color: 'hsl(var(--gold))' }} />
            </div>

            {/* Main heading with calligraphy and gold accents */}
            <div className="space-y-4">
              <p className="text-script text-2xl ink-splatter" style={{ color: 'hsl(var(--gold) / 0.8)' }}>
                Hello, I'm
              </p>
              <h1 className="text-6xl lg:text-8xl font-display font-bold relative">
                <span className="text-gray-900">Prathmesh</span>
                <br />
                <span className="text-gradient relative">
                  Uchit
                  {/* Gold underline */}
                  <div className="absolute bottom-2 left-0 w-full h-1 rounded-full" style={{ background: 'hsl(var(--gold))' }}></div>
                </span>
              </h1>
              <p className="text-elegant text-lg text-gray-600">
                Software Developer & Creative Coder
              </p>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Passionate about <span className="font-semibold text-primary">learning</span>, 
              <span className="font-semibold" style={{ color: 'hsl(var(--gold))' }}> building</span>, and 
              <span className="font-semibold text-primary"> innovating</span> through code. 
              I create beautiful digital experiences that blend functionality with artistry.
            </p>

            {/* CTA Buttons with unique design */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToAbout}
                className="card-floating group px-8 py-4 font-medium smooth-transition"
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  Explore My Journey
                  <Code className="w-4 h-4 group-hover:rotate-12 smooth-transition" />
                </span>
              </button>
              
              <button className="card-morphic px-8 py-4 font-medium text-foreground smooth-transition">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Info badges */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Based in India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>2+ Years Journey</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Always Learning</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main visual - unique polygon design */}
              <div className="card-floating w-80 h-80 lg:w-96 lg:h-96 relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl flex items-center justify-center">
                  <div className="relative">
                    {/* Center icon */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                      <Code className="w-16 h-16 text-primary-foreground" />
                    </div>
                    
                    {/* Decorative text */}
                    <div className="text-center">
                      <p className="text-script text-xl text-accent/80">{ `{ code }` }</p>
                      <p className="text-elegant text-sm text-muted-foreground mt-2">with passion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech elements - optimized */}
              <div className="absolute -top-6 -right-6 card-morphic w-20 h-20 flex items-center justify-center animate-float-gentle">
                <span className="text-3xl">⚛️</span>
              </div>
              <div className="absolute top-1/2 -left-8 card-morphic w-16 h-16 flex items-center justify-center animate-float-gentle" style={{ animationDelay: '-2s' }}>
                <span className="text-2xl">🎨</span>
              </div>
              <div className="absolute -bottom-6 left-1/3 card-morphic w-14 h-14 flex items-center justify-center animate-float-gentle" style={{ animationDelay: '-4s' }}>
                <span className="text-xl">✨</span>
              </div>
              
              {/* Calligraphic accent */}
              <div className="absolute top-8 left-8 text-script text-4xl text-accent/30 pointer-events-none">
                ~
              </div>
            </div>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="card-ink flex flex-col items-center gap-3 px-6 py-4 group smooth-transition"
          >
            <span className="text-script text-sm text-muted-foreground">scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-primary group-hover:translate-y-1 smooth-transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
