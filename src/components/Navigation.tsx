
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'problem-solving', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: '/', label: 'Home', path: '/' },
    { id: '/about', label: 'About', path: '/about' },
    { id: '/skills', label: 'Skills', path: '/skills' },
    { id: '/projects', label: 'Projects', path: '/projects' },
    { id: 'experience', label: 'Experience', isSection: true },
    { id: 'problem-solving', label: 'Approach', isSection: true },
    { id: 'contact', label: 'Contact', isSection: true }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/"
            className="font-display font-semibold text-xl text-gradient hover:scale-105 transition-transform"
          >
            Prathmesh Uchit
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.isSection) {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
