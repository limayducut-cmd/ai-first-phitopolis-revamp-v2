import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../../constants';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Post not found</h2>
          <Link to="/blog" className="text-accent hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 text-primary">
      <div className="container mx-auto px-6 py-12">
        <Link to="/blog" className="flex items-center text-slate-500 hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back to Insights
        </Link>

        <article className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest text-accent">
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight text-primary">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-500 border-b border-slate-100 pb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                   <img src="https://picsum.photos/100/100?random=1" alt={post.author} />
                </div>
                <span className="font-medium text-primary">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2"><Calendar size={16} className="text-accent" /> <span>{post.date}</span></div>
              <div className="flex items-center space-x-2"><Clock size={16} className="text-accent" /> <span>{post.readTime}</span></div>
              <button className="flex items-center space-x-2 ml-auto text-accent hover:text-accent-hover font-bold">
                <Share2 size={16} /> <span>Share</span>
              </button>
            </div>
          </div>

          <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
             <img src={`https://picsum.photos/1200/800?random=${post.id + 100}`} className="w-full h-full object-cover" alt={post.title} />
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
            <p className="text-xl text-primary font-medium italic border-l-4 border-accent pl-6">
              "{post.excerpt}"
            </p>
            <p>
              In today's fast-paced technological landscape, the intersection of finance and distributed computing has never been more critical. 
              As we move towards increasingly complex data requirements, organizations must rethink their infrastructure from the ground up.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-12 mb-4">The Performance Paradox</h3>
            <p>
              Most engineering teams focus on horizontal scalability, but in low-latency environments, vertical optimization and hardware awareness 
              are often the keys to sub-microsecond performance. We've observed that standard cloud architectures often introduce jitter that is 
              unacceptable for high-frequency trading platforms.
            </p>
            <p>
              By leveraging custom kernel optimizations and specialized networking protocols, we can bypass traditional bottlenecks and deliver 
              unparalleled throughput. This post explores the core methodologies our team at Phitopolis uses to achieve these results.
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 shadow-sm">
               <h4 className="text-primary font-bold mb-4">Key Takeaways</h4>
               <ul className="space-y-3 text-sm list-none p-0">
                 <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full"></div><span>Hardware awareness is critical for latency-sensitive applications.</span></li>
                 <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full"></div><span>Standard cloud networking is often the primary bottleneck.</span></li>
                 <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-accent rounded-full"></div><span>Predictable performance requires rigorous statistical monitoring.</span></li>
               </ul>
            </div>
            <p>
              Conclusion goes here. The future is bright for those who can master both the mathematical theory and the engineering reality.
            </p>
          </div>
        </article>

        {/* Author Bio */}
        <div className="max-w-4xl mx-auto mt-24 p-8 bg-slate-50 border border-slate-200 rounded-3xl flex items-center gap-8 shadow-sm">
           <div className="w-24 h-24 bg-slate-200 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-300">
              <img src="https://picsum.photos/200/200?random=1" alt={post.author} className="w-full h-full object-cover" />
           </div>
           <div>
              <h4 className="font-bold text-lg mb-2 text-primary">Written by {post.author}</h4>
              <p className="text-slate-600 text-sm">
                Vikram is a quantitative technologist with over 15 years of experience in global banking. 
                He specializes in high-throughput distributed systems.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}