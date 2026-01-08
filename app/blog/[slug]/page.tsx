
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

  // Split content into paragraphs for better layout
  const paragraphs = post.content.split('\n').filter(p => p.trim().length > 0);

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
                   <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0A2A66&color=fff`} alt={post.author} />
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
             <img src={post.thumbnail} className="w-full h-full object-cover" alt={post.title} />
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
            {paragraphs.map((para, index) => (
              <React.Fragment key={index}>
                <p className={index === 0 ? "text-xl text-primary font-medium italic border-l-4 border-accent pl-6" : ""}>
                  {para}
                </p>
                {post.contentImages && post.contentImages[index] && (
                   <div className="my-12 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                      <img src={post.contentImages[index]} alt={`Contextual image ${index + 1}`} className="w-full h-auto" />
                   </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </article>

        {/* Author Bio */}
        <div className="max-w-4xl mx-auto mt-24 p-8 bg-slate-50 border border-slate-200 rounded-3xl flex items-center gap-8 shadow-sm">
           <div className="w-24 h-24 bg-slate-200 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-300">
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0A2A66&color=fff&size=128`} alt={post.author} className="w-full h-full object-cover" />
           </div>
           <div>
              <h4 className="font-bold text-lg mb-2 text-primary">Written by {post.author}</h4>
              <p className="text-slate-600 text-sm">
                A member of the Phitopolis team dedicated to excellence and community involvement.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}