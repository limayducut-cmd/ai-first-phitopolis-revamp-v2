
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { JOBS } from '../../../constants';
import { ArrowLeft, Send, CheckCircle2, Info } from 'lucide-react';

export default function JobDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Job not found</h2>
          <Link to="/careers" className="text-primary hover:underline">Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pb-24">
      <div className="container mx-auto px-6 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                {job.department}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-6 mb-4">{job.title}</h1>
              <p className="text-slate-400">{job.location} • {job.type}</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">Role Overview</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {job.description} Join a team of elites building high-performance systems where every millisecond counts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Key Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
              <ul className="space-y-4">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold mb-6">Apply for this role</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted (Mock)'); }}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                  <input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Resume URL / LinkedIn</label>
                  <input type="url" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="https://" required />
                </div>
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message (Optional)</label>
                   <textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary h-24" />
                </div>
                <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold flex items-center justify-center group transition-all">
                  Submit Application
                  <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-slate-500 text-center mt-4">
                  By applying, you agree to our privacy policy and terms.
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <Info size={18} className="text-primary flex-shrink-0" />
                  <p className="text-xs text-slate-400">Our hiring process typically takes 2-3 weeks from first contact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
