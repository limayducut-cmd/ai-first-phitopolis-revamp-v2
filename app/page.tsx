
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { SERVICES } from '../constants.tsx';
import { apolloClient } from '../lib/apollo-client';
import { GET_CAREERS } from '../lib/graphql/queries';

interface Career {
  id: string;
  job_title: string;
  slug: string;
  department: string;
  location: string;
  job_type: string;
  short_description?: string;
}

interface CareersData {
  careers: Career[];
}

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const practitionersSectionRef = useRef<HTMLDivElement>(null);
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const result = await apolloClient.query<CareersData>({
          query: GET_CAREERS,
        });
        setCareers(result.data.careers || []);
      } catch (error) {
        console.error('Error fetching careers:', error);
      }
    };

    fetchCareers();
  }, []);

  // Motion values for interactive spotlight (Hero section)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { damping: 30, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Motion values for practitioners section spotlight
  const practitionersMouseX = useMotionValue(0);
  const practitionersMouseY = useMotionValue(0);
  const practitionersSpotlightX = useSpring(practitionersMouseX, springConfig);
  const practitionersSpotlightY = useSpring(practitionersMouseY, springConfig);

  const handlePractitionersMouseMove = (e: React.MouseEvent) => {
    if (!practitionersSectionRef.current) return;
    const rect = practitionersSectionRef.current.getBoundingClientRect();
    practitionersMouseX.set(e.clientX - rect.left);
    practitionersMouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-primary group"
      >
        {/* Background Video */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen scale-105"
          >
            <source src="/hi-tech_blue_digital_connectivity_abstract_video.mp4" type="video/mp4" />
          </video>
          
          {/* Static & Animated Background Layers */}
          <div className="absolute inset-0">
            <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[160px] animate-bg-drift-1"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-accent/10 rounded-full blur-[140px] animate-bg-drift-2"></div>
            <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[180px] animate-bg-drift-3"></div>
            
            {/* NEW: Interactive Spotlight Blob */}
            <motion.div 
              className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              style={{
                left: spotlightX,
                top: spotlightY,
                translateX: '-50%',
                translateY: '-50%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(255,199,44,0.12) 0%, rgba(255,199,44,0) 70%)',
                filter: 'blur(60px)',
                zIndex: 1
              }}
            />

            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-none text-white">
            Make tomorrow's <br className="hidden md:block" /> technology with us!
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Founded by veterans in finance, we build the data systems of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary rounded-full font-bold flex items-center group shadow-lg shadow-accent/30 transition-all hover:scale-105 active:scale-95">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/careers" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-bold border border-white/30 transition-all hover:scale-105 active:scale-95">
              Join the Team
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
           <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
        </motion.div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-primary">Services we offer</h2>
            </div>
            <Link to="/services" className="text-slate-500 hover:text-primary flex items-center text-sm font-medium transition-colors group">
              View all services <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.15,
                  ease: [0.21, 1.02, 0.47, 0.98] 
                }}
                className="p-8 bg-slate-50 border border-slate-200 rounded-2xl group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 text-primary transform transition-transform group-hover:scale-110 duration-500">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-primary" })}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((f, j) => (
                      <li key={j} className="text-xs text-slate-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* Service Card Image moved inside relative z-10 for consistent bottom alignment */}
                  <div className="relative mt-auto -mx-8 -mb-8 overflow-hidden h-48">
                    <img 
                      src={[
                        'https://phitopolis.com/img/core-competencies/innovation.jpg',
                        'https://phitopolis.com/img/core-competencies/technical-excellence.jpg',
                        'https://phitopolis.com/img/core-competencies/proactive-communication.jpg'
                      ][i % 3]} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Credentials Section */}
      <section
        ref={practitionersSectionRef}
        onMouseMove={handlePractitionersMouseMove}
        className="py-24 bg-primary relative overflow-hidden text-white practitioners-section group/section"
      >
        {/* Interactive Spotlight Orb */}
        <motion.div
          className="absolute opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000 pointer-events-none practitioners-spotlight"
          style={{
            left: practitionersSpotlightX,
            top: practitionersSpotlightY,
            translateX: '-50%',
            translateY: '-50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255,199,44,0.15) 0%, rgba(255,199,44,0) 70%)',
            filter: 'blur(40px)',
            zIndex: 1
          }}
        />

        {/* Animated Background Layer - Grid & Nodes */}
        <div className="absolute inset-0 pointer-events-none practitioners-bg">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          {/* Drifting Nodes */}
          <div className="absolute w-2 h-2 bg-accent/20 rounded-full practitioners-node-1" style={{ top: '20%', left: '15%' }} />
          <div className="absolute w-1.5 h-1.5 bg-white/15 rounded-full practitioners-node-2" style={{ top: '60%', left: '25%' }} />
          <div className="absolute w-2.5 h-2.5 bg-accent/15 rounded-full practitioners-node-3" style={{ top: '35%', left: '80%' }} />
          <div className="absolute w-1.5 h-1.5 bg-white/10 rounded-full practitioners-node-4" style={{ top: '75%', left: '70%' }} />
          <div className="absolute w-2 h-2 bg-accent/10 rounded-full practitioners-node-5" style={{ top: '45%', left: '45%' }} />
          {/* Faint Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
            <line x1="15%" y1="20%" x2="25%" y2="60%" stroke="white" strokeWidth="1" className="practitioners-line-1" />
            <line x1="25%" y1="60%" x2="45%" y2="45%" stroke="white" strokeWidth="1" className="practitioners-line-2" />
            <line x1="45%" y1="45%" x2="80%" y2="35%" stroke="white" strokeWidth="1" className="practitioners-line-3" />
            <line x1="80%" y1="35%" x2="70%" y2="75%" stroke="white" strokeWidth="1" className="practitioners-line-4" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Kicker Text */}
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                Built in Live Markets
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight max-w-lg">Built by practitioners, for practitioners.</h2>
              <p className="text-slate-200 text-lg max-w-md leading-relaxed">
                Our leadership team brings decades of experience from Morgan Stanley, JPMorgan, and Deutsche Bank.
                We understand the rigors of high-frequency, data-intensive environments.
              </p>
              <div className="grid grid-cols-1 gap-8 pt-2">
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-accent">7+</div>
                  <div className="text-sm text-slate-300 uppercase tracking-wide">Years Exp</div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-accent font-bold hover:underline group">
                Our Story <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
               <div className="space-y-5">
                 {/* Ultra Low Latency Card */}
                 <div className="group practitioners-card practitioners-card-latency relative p-5 rounded-2xl border border-white/10 backdrop-blur-md bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                   <div className="flex items-center space-x-4">
                     <div className="relative">
                       <Zap className="text-accent w-6 h-6 practitioners-icon-pulse" />
                       {/* Waveform Animation Behind Icon */}
                       <div className="absolute inset-0 -z-10 practitioners-waveform">
                         <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -left-2 -top-2 w-10 h-10 opacity-30">
                           <path d="M2 12 L6 8 L10 16 L14 6 L18 14 L22 12" fill="none" stroke="#FFC72C" strokeWidth="1" className="practitioners-wave-path" />
                         </svg>
                       </div>
                     </div>
                     <div className="flex-1">
                       <div className="font-bold text-sm text-white">Ultra Low Latency</div>
                       <div className="text-xs text-slate-300">Sub-microsecond execution systems</div>
                     </div>
                   </div>
                   {/* Hover Expansion Content */}
                   <div className="practitioners-expand max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                     <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/5">
                       FPGA-accelerated order routing with nanosecond-level precision for competitive edge.
                     </p>
                   </div>
                 </div>

                 {/* Enterprise Security Card */}
                 <div className="group practitioners-card practitioners-card-security relative p-5 rounded-2xl border border-white/10 backdrop-blur-md bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                   <div className="flex items-center space-x-4">
                     <div className="relative">
                       <Shield className="text-accent w-6 h-6 practitioners-icon-breathe" />
                       {/* Rotating Outline Glow */}
                       <div className="absolute inset-0 -z-10 practitioners-shield-glow">
                         <div className="absolute -inset-2 rounded-full border border-accent/20 practitioners-rotate-slow" />
                         <div className="absolute -inset-3 rounded-full border border-accent/10 practitioners-rotate-slower" style={{ animationDirection: 'reverse' }} />
                       </div>
                     </div>
                     <div className="flex-1">
                       <div className="font-bold text-sm text-white">Enterprise Security</div>
                       <div className="text-xs text-slate-300">Military grade encryption standards</div>
                     </div>
                   </div>
                   {/* Hover Expansion Content */}
                   <div className="practitioners-expand max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                     <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/5">
                       SOC2 Type II compliant with end-to-end encryption and zero-trust architecture.
                     </p>
                   </div>
                 </div>

                 {/* Scalable Alpha Card */}
                 <div className="group practitioners-card practitioners-card-alpha relative p-5 rounded-2xl border border-white/10 backdrop-blur-md bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                   <div className="flex items-center space-x-4">
                     <div className="relative">
                       <TrendingUp className="text-accent w-6 h-6" />
                       {/* Upward Trend Animation */}
                       <div className="absolute inset-0 -z-10 practitioners-trend">
                         <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -left-1 -top-1 w-8 h-8 opacity-25">
                           <path d="M4 18 L10 12 L14 15 L20 6" fill="none" stroke="#FFC72C" strokeWidth="1.5" className="practitioners-trend-path" />
                         </svg>
                       </div>
                     </div>
                     <div className="flex-1">
                       <div className="font-bold text-sm text-white">Scalable Alpha</div>
                       <div className="text-xs text-slate-300">Statistical arbitrage & ML strategy</div>
                     </div>
                   </div>
                   {/* Hover Expansion Content */}
                   <div className="practitioners-expand max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                     <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/5">
                       Adaptive algorithms that evolve with market conditions, deployed across global venues.
                     </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Section-scoped CSS for animations */}
        <style>{`
          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .practitioners-section .practitioners-bg,
            .practitioners-section .practitioners-node-1,
            .practitioners-section .practitioners-node-2,
            .practitioners-section .practitioners-node-3,
            .practitioners-section .practitioners-node-4,
            .practitioners-section .practitioners-node-5,
            .practitioners-section .practitioners-icon-pulse,
            .practitioners-section .practitioners-icon-breathe,
            .practitioners-section .practitioners-rotate-slow,
            .practitioners-section .practitioners-rotate-slower,
            .practitioners-section .practitioners-wave-path,
            .practitioners-section .practitioners-trend-path {
              animation: none !important;
            }
            .practitioners-section .practitioners-expand,
            .practitioners-section .practitioners-spotlight {
              transition: none !important;
            }
            .practitioners-section .practitioners-spotlight {
              opacity: 0 !important;
            }
          }

          /* Drifting node animations */
          .practitioners-node-1 {
            animation: practitioners-drift-1 25s ease-in-out infinite;
          }
          .practitioners-node-2 {
            animation: practitioners-drift-2 30s ease-in-out infinite;
          }
          .practitioners-node-3 {
            animation: practitioners-drift-3 28s ease-in-out infinite;
          }
          .practitioners-node-4 {
            animation: practitioners-drift-4 32s ease-in-out infinite;
          }
          .practitioners-node-5 {
            animation: practitioners-drift-5 26s ease-in-out infinite;
          }

          @keyframes practitioners-drift-1 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(15px, 10px); }
            50% { transform: translate(5px, 20px); }
            75% { transform: translate(-10px, 8px); }
          }
          @keyframes practitioners-drift-2 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-12px, -8px); }
            50% { transform: translate(8px, -15px); }
            75% { transform: translate(15px, 5px); }
          }
          @keyframes practitioners-drift-3 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-20px, 12px); }
            50% { transform: translate(-10px, -10px); }
            75% { transform: translate(10px, -5px); }
          }
          @keyframes practitioners-drift-4 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -15px); }
            50% { transform: translate(-15px, -8px); }
            75% { transform: translate(-5px, 12px); }
          }
          @keyframes practitioners-drift-5 {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(12px, 12px); }
            66% { transform: translate(-8px, 8px); }
          }

          /* Icon micro-animations */
          .practitioners-icon-pulse {
            animation: practitioners-pulse 3s ease-in-out infinite;
          }
          .practitioners-icon-breathe {
            animation: practitioners-breathe 4s ease-in-out infinite;
          }

          @keyframes practitioners-pulse {
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 0px transparent); }
            50% { opacity: 0.85; filter: drop-shadow(0 0 6px rgba(255, 199, 44, 0.4)); }
          }
          @keyframes practitioners-breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          /* Rotating security outlines */
          .practitioners-rotate-slow {
            animation: practitioners-rotate 20s linear infinite;
          }
          .practitioners-rotate-slower {
            animation: practitioners-rotate 30s linear infinite;
          }
          @keyframes practitioners-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Waveform animation */
          .practitioners-wave-path {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: practitioners-wave-draw 2s ease-in-out infinite;
          }
          @keyframes practitioners-wave-draw {
            0%, 100% { stroke-dashoffset: 60; }
            50% { stroke-dashoffset: 0; }
          }

          /* Trend line animation */
          .practitioners-trend-path {
            stroke-dasharray: 40;
            stroke-dashoffset: 40;
            animation: practitioners-trend-draw 3s ease-out infinite;
          }
          @keyframes practitioners-trend-draw {
            0% { stroke-dashoffset: 40; opacity: 0.1; }
            50% { stroke-dashoffset: 0; opacity: 0.4; }
            100% { stroke-dashoffset: 40; opacity: 0.1; }
          }
        `}</style>
      </section>

      {/* Featured Jobs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-primary">Work with the best.</h2>
            <p className="text-slate-600 mb-12 max-w-xl mx-auto">
              We're looking for world-class engineers and data scientists to solve impossible problems.
            </p>
          </motion.div>

          {careers.length > 0 ? (
            <>
              <div className="max-w-4xl mx-auto space-y-4 text-left">
                {careers.slice(0, 5).map((job: Career, idx: number) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={`/careers/${job.slug}`}
                      className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-accent hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="font-bold text-xl text-primary group-hover:text-primary transition-colors">{job.job_title}</h3>
                        <p className="text-sm text-slate-500">{job.department} • {job.location}</p>
                      </div>
                      <div className="px-4 py-2 bg-slate-100 text-primary text-sm font-bold rounded-full group-hover:bg-accent group-hover:text-primary transition-all group-hover:scale-105 active:scale-95">
                        View Position
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/careers" className="text-primary hover:text-accent font-bold transition-all underline decoration-accent underline-offset-4">
                  View all {careers.length} opening{careers.length !== 1 ? 's' : ''}
                </Link>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <p className="text-slate-500 mb-8">
                No open positions at the moment, but we're always looking for exceptional talent.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-hover text-primary rounded-full font-bold shadow-lg shadow-accent/30 transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
