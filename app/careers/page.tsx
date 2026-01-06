
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOBS } from '../../constants';
import { Search, MapPin, Clock, Briefcase, Filter } from 'lucide-react';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredJobs = JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="py-24 border-b border-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Build the future of engineering.</h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              We are a team of mathematicians, physicists, and engineers building the next generation 
              of high-performance technology. No bureaucracy, just hard problems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                className="w-full bg-slate-900 border border-slate-800 rounded-full py-3 pl-12 pr-6 focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Search by role or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               <button className="whitespace-nowrap px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-xs font-bold hover:border-primary">All Roles</button>
               <button className="whitespace-nowrap px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-xs font-bold hover:border-primary">Engineering</button>
               <button className="whitespace-nowrap px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-xs font-bold hover:border-primary">Data Science</button>
               <button className="whitespace-nowrap px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-xs font-bold hover:border-primary">Product</button>
            </div>
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Link 
                  key={job.id} 
                  to={`/careers/${job.slug}`}
                  className="group block p-8 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900 hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center">
                          <Clock size={14} className="mr-1" /> {job.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex items-center space-x-6 text-sm text-slate-400">
                        <span className="flex items-center"><MapPin size={16} className="mr-2" /> {job.location}</span>
                        <span className="flex items-center"><Briefcase size={16} className="mr-2" /> Remote Friendly</span>
                      </div>
                    </div>
                    <button className="px-8 py-3 bg-slate-950 border border-slate-800 rounded-xl font-bold group-hover:bg-primary group-hover:text-white transition-all">
                      Apply Now
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
              <Search className="mx-auto text-slate-700 mb-4" size={48} />
              <h3 className="text-xl font-bold">No positions found matching your search.</h3>
              <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-primary/5 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Perks & Benefits</h2>
            <p className="text-slate-400 mt-4">We take care of our people so they can focus on what they do best.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">💰</div>
              <h4 className="font-bold mb-2">Competitive Pay</h4>
              <p className="text-xs text-slate-500">Industry leading salary and meaningful equity packages.</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">🏠</div>
              <h4 className="font-bold mb-2">Flexible Work</h4>
              <p className="text-xs text-slate-500">Remote-first culture with beautiful hubs for collaboration.</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">📚</div>
              <h4 className="font-bold mb-2">Learning Budget</h4>
              <p className="text-xs text-slate-500">Generous allowance for conferences, books, and courses.</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">🩺</div>
              <h4 className="font-bold mb-2">Health & Wellness</h4>
              <p className="text-xs text-slate-500">Premium health coverage and mental health support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
