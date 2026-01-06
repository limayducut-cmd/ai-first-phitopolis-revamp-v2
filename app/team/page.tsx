
import React from 'react';
import { TEAM } from '../../constants';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">The Collective</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 mb-8">Meet the practitioners.</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            We don't have account managers. We have engineers who talk to clients. 
            Caliber is our only currency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="group p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-primary/50 transition-all flex flex-col md:flex-row gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-800 grayscale group-hover:grayscale-0 transition-all">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded">
                      {exp}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-2">
                  <Linkedin size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                  <Github size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                  <ExternalLink size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Teaser */}
        <div className="mt-32 p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Want to join the collective?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            We're always looking for brilliant minds who obsess over clean code and mathematical precision.
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
