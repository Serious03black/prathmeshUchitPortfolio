
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-element',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for contact cards
      gsap.to('.float-card', {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "prathmesh@example.com",
      href: "mailto:prathmesh@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mumbai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life with innovative web solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="contact-element space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about web development, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="float-card group flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">{info.title}</div>
                      <div className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-indigo-600 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 ${social.color} shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-element">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="contact-element bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's turn your vision into reality. I'm here to help you build something amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Schedule a Call
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Prathmesh Somnath Uchit. Crafted with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
