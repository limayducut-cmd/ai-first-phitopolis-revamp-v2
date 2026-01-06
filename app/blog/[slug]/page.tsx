
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../../constants';
import { ArrowLeft, User, Calendar, Clock, Share2 } from 'lucide-react';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pb-24">
      <div className="container mx-auto px-6 py-12">
        <Link to="/blog" className="flex items-center text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back to Insights
        </Link>

        <article className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest text-primary">
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-400 border-b border-slate-900 pb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-800 rounded-full overflow-hidden">
                   <img src="https://picsum.photos/100/100?random=1" alt={post.author} />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2"><Calendar size={16} /> <span>{post.date}</span></div>
              <div className="flex items-center space-x-2"><Clock size={16} /> <span>{post.readTime}</span></div>
              <button className="flex items-center space-x-2 ml-auto text-primary hover:text-primary-light">
                <Share2 size={16} /> <span>Share</span>
              </button>
            </div>
          </div>

          <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
             <img src={`https://picsum.photos/1200/800?random=${post.id + 100}`} className="w-full h-full object-cover" alt={post.title} />
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed space-y-6">
            <p className="text-xl text-white font-medium italic">
              "{post.excerpt}"
            </p>
            <p>
              In today's fast-paced technological landscape, the intersection of finance and distributed computing has never been more critical. 
              As we move towards increasingly complex data requirements, organizations must rethink their infrastructure from the ground up.
            </p>
            <h3 className="text-2xl font-bold text-white mt-12 mb-4">The Performance Paradox</h3>
            <p>
              Most engineering teams focus on horizontal scalability, but in low-latency environments, vertical optimization and hardware awareness 
              are often the keys to sub-microsecond performance. We've observed that standard cloud architectures often introduce jitter that is 
              unacceptable for high-frequency trading platforms.
            </p>
            <p>
              By leveraging custom kernel optimizations and specialized networking protocols, we can bypass traditional bottlenecks and deliver 
              unparalleled throughput. This post explores the core methodologies our team at Phitopolis uses to achieve these results.
            </p>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 my-12">
               <h4 className="text-white font-bold mb-4">Key Takeaways</h4>
               <ul className="space-y-3 text-sm">
                 <li>Hardware awareness is critical for latency-sensitive applications.</li>
                 <li>Standard cloud networking is often the primary bottleneck.</li>
                 <li>Predictable performance requires rigorous statistical monitoring.</li>
               </ul>
            </div>
            <p>
              Conclusion goes here. The future is bright for those who can master both the mathematical theory and the engineering reality.
            </p>
          </div>
        </article>

        {/* Author Bio */}
        <div className="max-w-4xl mx-auto mt-24 p-8 bg-slate-900 border border-slate-800 rounded-3xl flex items-center gap-8">
           <div className="w-24 h-24 bg-slate-800 rounded-2xl overflow-hidden flex-shrink-0">
              <img src="https://picsum.photos/200/200?random=1" alt={post.author} className="w-full h-full object-cover" />
           </div>
           <div>
              <h4 className="font-bold text-lg mb-2">Written by {post.author}</h4>
              <p className="text-slate-400 text-sm">
                Vikram is a quantitative technologist with over 15 years of experience in global banking. 
                He specializes in high-throughput distributed systems.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
