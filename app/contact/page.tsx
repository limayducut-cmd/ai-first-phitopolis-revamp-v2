
import React from 'react';
import { Mail, MapPin, Globe, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Let's talk tech.</h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                Whether you have a complex R&D challenge or want to scale your data capabilities, 
                our team is ready to assist.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-slate-400">contact@phitopolis.com</p>
                  <p className="text-slate-500 text-sm mt-1">We typically respond within 12 hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office</h4>
                  <p className="text-slate-400">702, Skyline Wealth Space, Mumbai, IN</p>
                  <p className="text-slate-500 text-sm mt-1">Visit by appointment only.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Globe />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Global Presence</h4>
                  <p className="text-slate-400">Mumbai • New York • London (Remote)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-8">Send a message</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                  <input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="email@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Inquiry Type</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-primary appearance-none">
                  <option>Service Inquiry</option>
                  <option>Career Question</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                <textarea className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-primary h-32" placeholder="Tell us about your project..." required />
              </div>
              <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold flex items-center justify-center group transition-all">
                Send Inquiry
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
