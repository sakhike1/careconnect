import { useState, useEffect, useRef } from 'react';
import { Info, Users, CheckCircle, Award, BarChart, Target, Globe, Briefcase, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import ImageLogo from './assets/logo.png';
import ImageLogo1 from './assets/save2.jpg';
import ImageLogo2 from './assets/save4.jpg';
import ImageLogo3 from './assets/man5.png';
import ImageLogo4 from './assets/man6.png';
import ImageLogo5 from './assets/man3.png'
import ImageLogo6 from './assets/man2.png'
import ImageLogo7 from './assets/man1.png'
import ScrollButton from "./components/ScrollButton";


// import ImageLogo4 from './assets/save4.jpg';
// import ImageLogo5 from './assets/save4.jpg';


export const CareConnectProfile = () => {
  const [scrollY, setScrollY] = useState(0);
  type ColorScheme = keyof typeof colorSchemes; // Define the type for color schemes
  const [activeColorScheme, setActiveColorScheme] = useState<ColorScheme>('blue');
  const headerRef = useRef<HTMLDivElement>(null);

  // Color schemes for dynamic theme changes
  const colorSchemes = {
    blue: {
      primary: 'from-green-300 via-blue-500 to-purple-600',
      secondary: 'bg-blue-600',
      accent: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      footer: 'bg-blue-900',
      card: 'bg-blue-50'
    },
    teal: {
      primary: 'from-blue-400 via-teal-500 to-emerald-600',
      secondary: 'bg-teal-600',
      accent: 'text-teal-600',
      button: 'bg-teal-600 hover:bg-teal-700 text-white',
      footer: 'bg-teal-900',
      card: 'bg-teal-50'
    },
    purple: {
      primary: 'from-indigo-400 via-purple-500 to-pink-500',
      secondary: 'bg-purple-600',
      accent: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      footer: 'bg-purple-900',
      card: 'bg-purple-50'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Rotate through color schemes every 20 seconds for AI-inspired dynamic theming
    const colorInterval = setInterval(() => {
      setActiveColorScheme((prev) => {
        const schemes = Object.keys(colorSchemes) as ColorScheme[];
        const currentIndex = schemes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % schemes.length;
        return schemes[nextIndex];
      });
    }, 20000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(colorInterval);
    };
  }, []);

  // AI-inspired floating particles background
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.floor(Math.random() * 6) + 2;
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const animDuration = Math.floor(Math.random() * 20) + 10;
      const delay = Math.floor(Math.random() * 10);

      particles.push(
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top,
            left,
            animation: `float ${animDuration}s infinite ease-in-out ${delay}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Dynamic Background Color Style */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      {/* Header */}
      <header
        ref={headerRef}
        className="relative overflow-hidden"
        style={{
          height: '70vh',
          minHeight: '500px',
          maxHeight: '800px'
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${colorSchemes[activeColorScheme].primary}`}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundSize: '200% 200%',
            animation: 'gradient 15s ease infinite'
          }}
        >
          {/* AI-inspired animated particles */}
          {renderParticles()}
        </div>

        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center relative z-10">
          <div className="relative">
            {/* Pulsing effect behind logo */}
            <div
              className="absolute inset-0 rounded-full bg-white/30 blur-xl"
              style={{
                animation: 'pulse 3s ease-in-out infinite',
                width: '100%',
                height: '100%',
                transform: 'scale(1.5)'
              }}
            />

            {/* Ripple effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border-2 border-white/30"
                  style={{
                    width: '100%',
                    height: '100%',
                    animation: `ripple 3s ease-in-out ${i * 0.8}s infinite`
                  }}
                />
              ))}
            </div>

            {/* Logo with enhanced responsive design */}
            <div className="relative">
              <img
                src={ImageLogo}
                alt="CareConnect Logo"
                className="rounded-full shadow-lg mb-6 relative z-10 w-[120px] h-[120px] sm:w-40 sm:h-40 md:w-[50px] md:h-[50px] lg:w-48 lg:h-48 xl:w-[175px] xl:h-[175px] object-cover mx-auto"
                
              />
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              animation: "fadeIn 1s ease-out"
            }}
          >
            CareConnect Consulting
          </h1>

          <p
            className="text-xl sm:text-2xl italic text-white/90 mb-8"
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.2)"
            }}
          >
            Your Health, Our Expertise.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#overview"
              className="bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-blue-100 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-green-300 to-purple-400 text-gray-200 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us <Mail className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Color theme switcher */}
          <div className="absolute bottom-8 right-8 flex space-x-2">
            {Object.keys(colorSchemes).map((scheme) => (
              <button
                key={scheme}
                className={`w-6 h-6 rounded-full border-2 border-white/50 ${scheme === activeColorScheme ? 'ring-2 ring-white' : ''}`}
                style={{
                  backgroundColor: scheme === 'blue' ? '#3b82f6' :
                    scheme === 'teal' ? '#0d9488' :
                      '#8b5cf6'
                }}
                onClick={() => setActiveColorScheme(scheme as ColorScheme)}
                aria-label={`Switch to ${scheme} theme`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        {/* Overview Section */}
        <section
          id="overview"
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <Info className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
          </div>
          <div
            className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-50 transform transition-all duration-300 hover:shadow-xl"
          >
            <p
              className="text-gray-700 text-lg leading-relaxed"
            >
              CareConnect Consulting is an independent health consulting firm dedicated to improving the health of populations through innovative healthcare service delivery. Leveraging on combined experience of over 50 years, the team approaches to tackle existing country and regional public health issues. Through innovative research, providing wide-ranging health solutions and interventions, and conducting strategic impact measurements, we strive to provide better services and solutions to people and communities.
            </p>
            <p
              className="text-gray-700 mt-6 text-lg leading-relaxed"
            >
              Drawing on vast experience and lessons learned from working in global health projects, we apply our expertise in health systems strengthening, data analytics and visualization, project management, monitoring and evaluation, surveys and surveillance, grant management and compliance and strategic information and data management to address local health challenges. We specialize in providing expert services and evidence-based solutions to enhance health outcomes.
            </p>

            {/* AI-inspired animated data visualization */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Global Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "50+", label: "Years Experience", icon: "clock" },
                  { value: "10+", label: "Countries", icon: "globe" },
                  { value: "20+", label: "Projects", icon: "folder" },
                  { value: "100k+", label: "Lives Impacted", icon: "users" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`${colorSchemes[activeColorScheme].card} p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    <p className={`${colorSchemes[activeColorScheme].accent.replace('text-', 'text-')} font-bold text-2xl md:text-3xl`}
                      style={{ animation: `fadeInUp 0.5s ease ${index * 0.1}s both` }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision with enhanced styling */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section>
            <div className="flex items-center mb-6">
              <Target className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <div
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-8 h-full border-l-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower health systems and populations with the knowledge and tools needed to optimize health services, and improve quality of life.
              </p>
              <div className="mt-6 rounded-lg overflow-hidden relative h-40 sm:h-48 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10"></div>
                <img
  src={ImageLogo1}
  alt="Mission illustration"
  className="w-full h-full object-fill transition-transform duration-700 hover:scale-110"
/>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-blue-700">
                    Our Purpose
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Globe className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <div
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-8 h-full border-r-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a trusted leader in health consulting, transforming  health systems and shaping a healthier future for communities.
              </p>
              <div className="mt-6 rounded-lg overflow-hidden relative h-40 sm:h-48 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10"></div>
                <img
                  src={ImageLogo2}
                  alt="Vision illustration"
                  className="w-full h-full object-fill transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-blue-700">
                    Our Goal
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* About Us with enhanced AI-inspired design */}
        <section
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <Briefcase className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          </div>
          <div
            className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden border border-blue-50 transform transition-all duration-300 hover:shadow-xl"
          >
            {/* Abstract AI-inspired background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
              >
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="80" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                We are a committed cadre of accomplished experts with capabilities to design, implement, monitor, and evaluate a range of innovative programs in the fields of implementation science, epidemiology, biomedical sciences, and clinical research.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { value: "50+", label: "Years Experience" },
                  { value: "10+", label: "Countries" },
                  { value: "20+", label: "Projects" },
                  { value: "100k+", label: "Lives Impacted" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`${colorSchemes[activeColorScheme].card} p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    <p className={`${colorSchemes[activeColorScheme].accent} font-bold text-2xl`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services with enhanced modern styling */}
        <section
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <CheckCircle className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
            <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 border border-blue-50">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Project Design", desc: "Comprehensive project design and implementation support." },
                { title: "Project Management", desc: "General project management with a focus on healthcare outcomes." },
                { title: "Systems Strengthening", desc: "Health systems strengthening programmatic support." },
                { title: "Proposal Writing", desc: "Professional proposal writing and development." },
                { title: "Evaluation", desc: "Comprehensive programs evaluation and assessment." },
                { title: "Program Design", desc: "Catalytic programs design, launch, scale up and evaluation." },
                { title: "Capacity Building", desc: "Training and capacity building for healthcare professionals." },
                { title: "Impact Measurement", desc: "Data-driven impact measurement and analysis." },
                { title: "Research", desc: "Public health research and development." }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3 font-semibold">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-800">{service.title}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us with modern design */}
        <section
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <Award className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 border border-blue-50">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Exceptionally trained consultants – certified health professionals, laboratory specialists, data scientists, statisticians, and project managers.",
                "Evidence-based approach – solutions backed by scientific research and best practices.",
                "Diverse, diligent and self-reliant team.",
                "Customized solutions – programs designed to meet individual and organizational needs.",
                "Proven track record improving health outcomes."
              ].map((reason, index) => (
                <div
                  key={index}
                  className={`${colorSchemes[activeColorScheme].card} p-6 rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <div
                    className={`absolute top-0 left-0 ${colorSchemes[activeColorScheme].secondary.replace('bg-', 'bg-')} h-full w-1`}
                  />
                  <div className="flex items-start">
                    <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${colorSchemes[activeColorScheme].secondary} text-white mr-3 mt-0.5 font-semibold`}>
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team with enhanced modern card design */}
        <section
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <Users className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Our Expert Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[

              {
  name: "Dr. Herbert Longwe",
  title: "Laboratory Specialist",
  bio: "Deputy Director Laboratory Support at ICAP at Columbia University, coordinating multi-country projects.",
  image: ImageLogo3
},
              {
                name: "Ms. Skhosana",
                title: "Senior Regional Laboratory Advisor",
                bio: "26 years' experience in pathology laboratory space, with extensive experience in HIV prevention clinical trials.",
                image: ImageLogo4
              },
              
              {
                name: "Ms. Tepa Nkumbula",
                title: "Health Programs Management Specialist",
                bio: "An accomplished public health professional with extensive experience in large-scale national surveys.",
                image: ImageLogo7 
              },
              {
                name: "Takura Kupamupindi",
                title: "Biostatistician and Public Health Specialist",
                bio: "Highly skilled statistician and public health specialist with extensive experience in survey methodology.",
                image: ImageLogo6
              },
              {
                name: "Oliver Murangandi",
                title: "Data Scientist",
                bio: "Data scientist with over 15 years' experience in data management across health sectors.",
                image: ImageLogo5
              },
              {
                name: "Pule Mphole",
                title: "ICT Specialist",
                bio: "Results-driven ICT Specialist with 16 years' experience in IT industry and consulting.",
                image: ImageLogo
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative">
                  <div className={`bg-gradient-to-r ${colorSchemes[activeColorScheme].primary} h-32`}>
                    <div
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="relative">
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 rounded-full bg-white/30 blur-md animate-pulse"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full border-4 border-white object-cover relative z-10 transform transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-20 p-6 text-center">
                  <h3 className={`text-xl font-bold ${colorSchemes[activeColorScheme].accent}`}>{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.title}</p>

                  <p className="text-sm text-gray-600 mb-3">
                    {member.bio}
                  </p>

                  
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise with modern interactive design */}
        <section
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <BarChart className={`mr-3 ${colorSchemes[activeColorScheme].accent}`} size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Areas of Expertise</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 border border-blue-50">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Health systems strengthening",
                "Data analytics and visualization",
                "Project management",
                "Monitoring and evaluation",
                "Surveys and surveillance",
                "Grant management and compliance",
                "Strategic information management",
                "Data management",
                "Implementation science",
                "Epidemiology",
                "Biomedical sciences",
                "Clinical research"
              ].map((expertise, index) => (
                <div
                  key={index}
                  className={`flex items-center ${colorSchemes[activeColorScheme].card} p-4 rounded-lg transition-all duration-300 transform hover:scale-102 hover:shadow-md`}
                >
                  <div className={`h-3 w-3 rounded-full ${colorSchemes[activeColorScheme].secondary} mr-3 flex-shrink-0`}></div>
                  <span className="text-gray-700">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us CTA with enhanced animation */}
         <ScrollButton/>
      </main>

      {/* Footer */}
      <footer id="contact" className={`${colorSchemes[activeColorScheme].footer} text-white py-8`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Health St, Wellness City, WC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (234) 567-890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@careconnect.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            

            {/* Social Media */}
            
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CareConnect Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareConnectProfile;