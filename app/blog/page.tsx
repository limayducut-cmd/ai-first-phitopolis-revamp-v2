
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../constants';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Insights</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 mb-8">Technical perspectives.</h1>
          <p className="text-xl text-slate-400 font-light">Deep dives into FinTech, ML, and the future of distributed systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group block space-y-6"
            >
              <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
                <img 
                  src={`https://picsum.photos/800/600?random=${post.id + 50}`} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <span>{post.category}</span>
                  <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-slate-400 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center space-x-3 text-sm text-slate-500 pt-2">
                   <User size={14} /> <span>{post.author}</span>
                   <Calendar size={14} className="ml-2" /> <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-3xl font-display font-bold mb-4">Stay ahead of the curve.</h3>
          <p className="text-slate-400 mb-8">Subscribe to our monthly newsletter for engineering insights and updates.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-6 py-4 outline-none focus:ring-1 focus:ring-primary" placeholder="Email Address" />
            <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
