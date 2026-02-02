
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Phone, Download, Menu, X } from 'lucide-react';


export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navbar */}
      {/* Navbar */}
<nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">

      {/* Logo */}
      <button
        onClick={() => scrollToSection('home')}
        className="text-xl font-bold heading-font hover:text-blue-400 transition-colors"
      >
        AS
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {[
          { id: 'home', label: 'Home' },
          { id: 'projects', label: 'Projects' },
          { id: 'skills', label: 'Skills' },
          { id: 'about', label: 'About' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id
                ? 'text-blue-400'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    </div>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-[#0a0a0a] border-b border-white/10">
      <div className="flex flex-col items-center gap-6 py-6">
        {['home','projects','skills','about','contact'].map((section) => (
          <button
            key={section}
            onClick={() => {
              scrollToSection(section);
              setMenuOpen(false);
            }}
            className="text-lg text-white/80 hover:text-white transition"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>


      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-font leading-tight">
              Amol Singhal
            </h1>
            
            <h2 className="text-3xl font-semibold text-white/90 mb-4">
              Software Developer
            </h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-3xl leading-relaxed">
              3rd-year Computer Science student building real-world, scalable applications using modern web technologies and machine learning. Currently open to internship opportunities.
            </p>
            
            <div className="grid grid-cols-2 md:flex gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              >
                View Projects
              </button>
              <a
                href="/Amol_Singhal_Resume.pdf"
                download
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="https://github.com/amolsinghal95"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2 border border-white/10"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/amolsinghal95"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2 border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 heading-font">Projects</h2>
          <p className="text-white/60 text-lg mb-16">Building scalable solutions to real-world problems</p>
          
          <div className="space-y-8">
            {/* Featured Project - Grypfit */}
            <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-medium text-blue-400 mb-2">FEATURED PROJECT</div>
                  <h3 className="text-3xl font-bold mb-2 heading-font">Gryp.fit — Gym Equipment Business Website</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'JavaScript', 'HTML', 'CSS', 'Google Maps API'].map((tech) => (
                  <span key={tech} className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-sm border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-3 text-white/70 leading-relaxed mb-6">
                <p>Engineered a high-performance commercial website for Grypfit (Singhal Industries), significantly enhancing digital visibility for a large catalog of gym and sports equipment.</p>
                <p>Architected a scalable product system capable of rendering hundreds of high-resolution items with optimized load performance.</p>
                <p>Integrated Google Maps for precise location services and WhatsApp API to streamline customer inquiries and lead generation.</p>
                <p>Designed a modern, brand-aligned UI that improved navigation flow and boosted user engagement.</p>
              </div>
              
              <div className="grid grid-cols-2 md:flex gap-4">
                <a
                  href="https://www.gryp.fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
                >
                  Live Website
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/amolsinghal95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/10"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Phishing Detection */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]">
                <h3 className="text-2xl font-bold mb-2 heading-font">Phishing Website Detection System</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'Flask', 'Scikit-learn', 'Pandas'].map((tech) => (
                    <span key={tech} className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-sm border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3 text-white/70 leading-relaxed mb-6">
                  <p>Built a machine learning web application that detects phishing URLs in real-time with 95% accuracy using a Random Forest classifier trained on 10,000+ URLs.</p>
                  <p>Developed a Flask API to analyze lexical URL features and generate instant safety reports through an intuitive interface.</p>
                </div>
                
                <a
                  href="https://github.com/amolsinghal95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/10 inline-flex"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              {/* Attendance Management */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]">
                <h3 className="text-2xl font-bold mb-2 heading-font">Attendance Management System</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'MySQL', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                    <span key={tech} className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-sm border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3 text-white/70 leading-relaxed mb-6">
                  <p>Architected a full-stack attendance platform replacing manual workflows with an automated tracking system.</p>
                  <p>Implemented secure Role-Based Access Control for Admin, Teacher, and Student permissions.</p>
                  <p>Designed a normalized MySQL database supporting thousands of records and built an automated reporting engine generating downloadable monthly reports.</p>
                </div>
                
                <a
                  href="https://github.com/amolsinghal95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/10 inline-flex"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Currently Building */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 heading-font">Currently Building</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Developing scalable production-grade applications and expanding expertise in modern web stacks and machine learning systems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 heading-font">Skills</h2>
          <p className="text-white/60 text-lg mb-16">Technologies and tools I work with</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-blue-400 heading-font">Programming</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'C/C++', 'JavaScript', 'SQL', 'HTML/CSS', 'React'].map((skill) => (
                  <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-purple-400 heading-font">Computer Science</h3>
              <div className="flex flex-wrap gap-3">
                {['Data Structures', 'Algorithms', 'DBMS', 'OOP'].map((skill) => (
                  <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-emerald-400 heading-font">AI / ML</h3>
              <div className="flex flex-wrap gap-3">
                {['Pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                  <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-orange-400 heading-font">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'Linux', 'VS Code', 'AWS (Basics)'].map((skill) => (
                  <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 heading-font">About</h2>
          <p className="text-white/60 text-lg mb-16">Background and education</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 heading-font">About Me</h3>
              <div className="space-y-4 text-white/70 leading-relaxed text-lg">
                <p>
                  I am a Computer Science undergraduate at Graphic Era Deemed to be University (CGPA: 8.2) focused on building scalable software systems and solving real-world problems through web development and machine learning.
                </p>
                <p>
                  I enjoy engineering products that combine strong backend architecture with intuitive user experiences and continuously strive to expand my technical depth.
                </p>
                <p>
                  Currently seeking software internship opportunities where I can contribute, learn rapidly, and grow as an engineer.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 heading-font">Education</h3>
              <div className="border-l-2 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h4>
                <p className="text-white/70 mb-2">Graphic Era Deemed to be University</p>
                <div className="flex items-center gap-4 text-white/60">
                  <span className="font-medium">CGPA: 8.2</span>
                  <span>•</span>
                  <span>2023 – Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 heading-font">Contact</h2>
          <p className="text-white/60 text-lg mb-16">Let's connect and build something together</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="tel:+918449291260"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:bg-white/[0.07] hover:scale-105"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-white/60">+91 84492 91260</p>
            </a>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=amolsinghal95@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:bg-white/[0.07] hover:scale-105"
>

              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/60 break-all">amolsinghal95@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/amolsinghal95"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:bg-white/[0.07] hover:scale-105"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-white/60">linkedin.com/in/amolsinghal95</p>
            </a>

            <a
              href="https://github.com/amolsinghal95"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:bg-white/[0.07] hover:scale-105"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Github className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-white/60">github.com/amolsinghal95</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="py-10 px-6 border-t border-white/5">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

    {/* Name + Role */}
    <div className="text-white/70 text-sm">
      © {new Date().getFullYear()} Amol Singhal · Software Developer
    </div>

    {/* Quick Links */}
    <div className="flex items-center gap-6 text-sm text-white/60">
      <a 
        href="/Amol_Singhal_Resume.pdf" 
        target="_blank"
        className="hover:text-white transition-colors"
      >
        Resume
      </a>

      <a 
        href="https://github.com/amolsinghal95"
        target="_blank"
        className="hover:text-white transition-colors"
      >
        GitHub
      </a>

      <a 
        href="https://linkedin.com/in/amolsinghal95"
        target="_blank"
        className="hover:text-white transition-colors"
      >
        LinkedIn
      </a>
    </div>

  </div>
</footer>

    </div>
  );
}
