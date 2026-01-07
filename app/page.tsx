import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu, ChevronRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { SERVICES, JOBS, BLOG_POSTS } from '../constants.tsx';

export default function Home() {
  const [servicesVisible, setServicesVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          // Once visible, we can stop observing to preserve performance
          if (servicesRef.current) {
            observer.unobserve(servicesRef.current);
          }
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the section is visible
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Animated Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue Hue */}
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-600/10 rounded-full blur-[160px] animate-bg-drift-1"></div>
          {/* Purple Hue */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-600/15 rounded-full blur-[140px] animate-bg-drift-2"></div>
          {/* Orange Hue */}
          <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[180px] animate-bg-drift-3"></div>
          
          {/* Grainy Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 transition-transform duration-700 ease-out hover:scale-[1.01]">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Available for Q4 2024 Partnerships</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-none bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
            Making tomorrow's <br className="hidden md:block" /> technology available today.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up">
            Phitopolis builds elite software for R&D, Data Science, and Full-Stack Engineering. 
            Founded by industry veterans from the world's leading investment banks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:200ms]">
            <Link to="/services" className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold flex items-center group shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/careers" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700 backdrop-blur-sm text-white rounded-full font-bold border border-slate-700 transition-all hover:scale-105 active:scale-95">
              Join the Team
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Services Summary */}
      <section ref={servicesRef} className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">What we build</h2>
            </div>
            <Link to="/services" className="text-slate-400 hover:text-white flex items-center text-sm font-medium transition-colors group">
              View all services <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div 
                key={i} 
                style={{ animationDelay: `${i * 150}ms` }}
                className={`p-8 bg-slate-950 border border-slate-800 rounded-2xl transition-all group relative overflow-hidden ${
                  servicesVisible 
                    ? 'animate-slide-up opacity-100' 
                    : 'opacity-0'
                } hover:border-primary/50`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((f, j) => (
                    <li key={j} className="text-xs text-slate-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Credentials Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Built by practitioners, for practitioners.</h2>
              <p className="text-slate-400 text-lg">
                Our leadership team brings decades of experience from Morgan Stanley, JPMorgan, and Deutsche Bank. 
                We understand the rigors of high-frequency, data-intensive environments.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-primary">15+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Years Exp</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-primary">50+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Projects</div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-primary font-bold hover:underline group">
                Our Story <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
               <div className="space-y-6">
                 <div className="flex items-center space-x-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl hover:bg-slate-950 transition-colors">
                   <Zap className="text-yellow-500" />
                   <div>
                     <div className="font-bold text-sm">Ultra Low Latency</div>
                     <div className="text-xs text-slate-500">Sub-microsecond execution systems</div>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl hover:bg-slate-950 transition-colors">
                   <Shield className="text-blue-500" />
                   <div>
                     <div className="font-bold text-sm">Enterprise Security</div>
                     <div className="text-xs text-slate-500">Military grade encryption standards</div>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl hover:bg-slate-950 transition-colors">
                   <TrendingUp className="text-green-500" />
                   <div>
                     <div className="font-bold text-sm">Scalable Alpha</div>
                     <div className="text-xs text-slate-500">Statistical arbitrage & ML strategy</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Work with the best.</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            We're looking for world-class engineers and data scientists to solve impossible problems.
          </p>
          <div className="max-w-4xl mx-auto space-y-4 text-left">
            {JOBS.map((job) => (
              <Link 
                key={job.id}
                to={`/careers/${job.slug}`}
                className="group block p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-primary hover:bg-slate-950/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-sm text-slate-500">{job.department} • {job.location}</p>
                </div>
                <div className="px-4 py-2 bg-slate-900 text-slate-300 text-sm font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                  View Position
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/careers" className="text-primary hover:underline font-bold transition-all">View all 12 openings</Link>
          </div>
        </div>
      </section>
    </div>
  );
}