
import React from 'react';
import { SERVICES } from '../../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 mb-8">
            Technical excellence at every layer.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Phitopolis combines deep domain knowledge in finance and technology with modern engineering practices 
            to deliver systems that are performant, scalable, and secure.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-start`}>
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-display font-bold">{service.title}</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {service.description} We leverage state-of-the-art tools and methodologies to ensure your project
                  not only meets but exceeds industry standards for performance and reliability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full font-bold transition-all flex items-center group">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex-1 w-full bg-slate-900 rounded-3xl aspect-video relative overflow-hidden border border-slate-800 group">
                <img 
                  src={`https://picsum.photos/800/600?random=${i + 10}`} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">How we work.</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">Flexible engagement models tailored to your team's needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Dedicated Team</h3>
              <p className="text-sm text-slate-400">A full cross-functional squad embedded into your organization for long-term vision.</p>
            </div>
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Project Based</h3>
              <p className="text-sm text-slate-400">Clear scope, fixed timeline, and defined deliverables for rapid prototype or feature launch.</p>
            </div>
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Staff Augmentation</h3>
              <p className="text-sm text-slate-400">Elite specialists to bolster your existing engineering or data science capabilities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
