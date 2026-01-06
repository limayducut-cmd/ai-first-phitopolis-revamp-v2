
import React from 'react';
import { ArrowRight, Target, Eye, Heart, Milestone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="py-24 border-b border-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mt-4 mb-12 tracking-tight">
              Bridge the gap between vision and reality.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Phitopolis was founded with a single mission: to provide elite-level technology services 
              that empower organizations to solve their most complex data and computational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Target />
              </div>
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To build high-performance systems that make massive datasets actionable, empowering our clients to stay ahead in competitive markets.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Eye />
              </div>
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the global benchmark for elite R&D and data science services, recognized for our technical depth and proven outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Heart />
              </div>
              <h3 className="text-2xl font-bold">Values</h3>
              <p className="text-slate-400 leading-relaxed">
                Radical transparency, technical integrity, and a relentless pursuit of performance. We value depth over breadth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden border border-slate-800">
               <img src="https://picsum.photos/800/800?random=15" alt="Founders" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                 <div className="text-white font-bold text-2xl">Phitopolis Leadership</div>
                 <div className="text-slate-400">Mumbai HQ Office</div>
               </div>
             </div>
             <div className="space-y-8">
               <h2 className="text-4xl font-display font-bold">Rooted in High-Finance.</h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                 Our founders spent years at the intersection of quantitative finance and distributed computing. 
                 Building systems for JPMorgan and Morgan Stanley taught us that reliability is non-negotiable and performance is the ultimate differentiator.
               </p>
               <p className="text-slate-400 text-lg leading-relaxed">
                 In 2021, we realized that these same challenges—massive data, low-latency requirements, 
                 and the need for complex R&D—were moving into broader enterprise sectors. Phitopolis was born to bring that elite expertise to you.
               </p>
               <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold p-2 overflow-hidden">
                      <span className="text-[10px]">Morgan Stanley</span>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold p-2 overflow-hidden">
                      <span className="text-[10px]">JPMorgan</span>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold p-2 overflow-hidden">
                      <span className="text-[10px]">Deutsche Bank</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Our Heritage</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-display font-bold">Our Journey</h2>
           </div>
           <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { year: '2021', title: 'Founded', desc: 'Started with 3 engineers in Mumbai.' },
                  { year: '2022', title: 'FinTech Growth', desc: 'Partnered with major global banks.' },
                  { year: '2023', title: 'Scale', desc: 'Expanded to R&D for AI startups.' },
                  { year: '2024', title: 'Global', desc: 'Opening our first NYC office.' }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 p-6 bg-slate-950 border border-slate-800 rounded-2xl md:bg-transparent md:border-none">
                    <div className="w-4 h-4 bg-primary rounded-full mb-4 mx-auto hidden md:block border-4 border-slate-900"></div>
                    <div className="text-primary font-bold mb-2 text-xl">{item.year}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
