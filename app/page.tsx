
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu, ChevronRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { SERVICES, JOBS, BLOG_POSTS } from '../constants';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-none bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Making tomorrow's <br className="hidden md:block" /> technology available today.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Phitopolis builds elite software for R&D, Data Science, and Full-Stack Engineering. 
            Founded by industry veterans from the world's leading investment banks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold flex items-center group transition-all">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/careers" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold border border-slate-700 transition-all">
              Join the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">What we build</h2>
            </div>
            <Link to="/services" className="text-slate-400 hover:text-white flex items-center text-sm font-medium">
              View all services <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-primary/50 transition-all group">
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
      <section className="py-24 bg-slate-950">
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
              <Link to="/about" className="inline-flex items-center text-primary font-bold hover:underline">
                Our Story <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
               <div className="space-y-6">
                 <div className="flex items-center space-x-4 p-4 bg-slate-950 border border-slate-800 rounded-xl">
                   <Zap className="text-yellow-500" />
                   <div>
                     <div className="font-bold text-sm">Ultra Low Latency</div>
                     <div className="text-xs text-slate-500">Sub-microsecond execution systems</div>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-slate-950 border border-slate-800 rounded-xl">
                   <Shield className="text-blue-500" />
                   <div>
                     <div className="font-bold text-sm">Enterprise Security</div>
                     <div className="text-xs text-slate-500">Military grade encryption standards</div>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-slate-950 border border-slate-800 rounded-xl">
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
                className="block p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-primary transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-bold text-xl">{job.title}</h3>
                  <p className="text-sm text-slate-500">{job.department} • {job.location}</p>
                </div>
                <div className="px-4 py-2 bg-slate-900 text-slate-300 text-sm font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  View Position
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/careers" className="text-primary hover:underline font-bold">View all 12 openings</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
