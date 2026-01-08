import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOBS } from '../../constants';
import { Search, MapPin, Clock, Briefcase } from 'lucide-react';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredJobs = JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Build the future of engineering.</h1>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              We are a team of mathematicians, physicists, and engineers building the next generation 
              of high-performance technology. No bureaucracy, just hard problems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                className="w-full bg-white border border-slate-300 rounded-full py-3 pl-12 pr-6 text-primary focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm"
                placeholder="Search by role or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               <button className="whitespace-nowrap px-4 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary-hover">All Roles</button>
               <button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-300 text-slate-600 rounded-full text-xs font-bold hover:border-accent hover:text-accent transition-colors">Engineering</button>
               <button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-300 text-slate-600 rounded-full text-xs font-bold hover:border-accent hover:text-accent transition-colors">Data Science</button>
               <button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-300 text-slate-600 rounded-full text-xs font-bold hover:border-accent hover:text-accent transition-colors">Product</button>
            </div>
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Link 
                  key={job.id} 
                  to={`/careers/${job.slug}`}
                  className="group block p-8 bg-white border border-slate-200 rounded-2xl hover:border-accent hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-accent/20 px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center">
                          <Clock size={14} className="mr-1 text-accent" /> {job.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-primary group-hover:text-primary-light transition-colors">{job.title}</h3>
                      <div className="flex items-center space-x-6 text-sm text-slate-500">
                        <span className="flex items-center"><MapPin size={16} className="mr-2 text-accent" /> {job.location}</span>
                        <span className="flex items-center"><Briefcase size={16} className="mr-2 text-accent" /> Remote Friendly</span>
                      </div>
                    </div>
                    <button className="px-8 py-3 bg-accent text-primary rounded-xl font-bold hover:bg-accent-hover transition-all shadow-md">
                      Apply Now
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
              <Search className="mx-auto text-slate-300 mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary">No positions found.</h3>
              <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Perks & Benefits</h2>
            <p className="text-slate-600 mt-4">We take care of our people so they can focus on what they do best.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-xl">💰</div>
              <h4 className="font-bold mb-2 text-primary">Competitive Pay</h4>
              <p className="text-xs text-slate-500">Industry leading salary and meaningful equity packages.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-xl">🏠</div>
              <h4 className="font-bold mb-2 text-primary">Flexible Work</h4>
              <p className="text-xs text-slate-500">Remote-first culture with beautiful hubs for collaboration.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-xl">📚</div>
              <h4 className="font-bold mb-2 text-primary">Learning Budget</h4>
              <p className="text-xs text-slate-500">Generous allowance for conferences, books, and courses.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-xl">🩺</div>
              <h4 className="font-bold mb-2 text-primary">Health & Wellness</h4>
              <p className="text-xs text-slate-500">Premium health coverage and mental health support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}