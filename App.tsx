
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ArrowRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

// Pages
import Home from './app/page.tsx';
import Services from './app/services/page.tsx';
import About from './app/about/page.tsx';
import Team from './app/team/page.tsx';
import Careers from './app/careers/page.tsx';
import Blog from './app/blog/page.tsx';
import Contact from './app/contact/page.tsx';
import JobDetail from './app/careers/[slug]/page.tsx';
import BlogPostDetail from './app/blog/[slug]/page.tsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-bold text-white text-xl">P</div>
          <span className="text-2xl font-display font-bold tracking-tight">Phitopolis</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? 'text-primary' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-300 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center font-bold text-white text-sm">P</div>
              <span className="text-xl font-display font-bold tracking-tight">Phitopolis</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Making tomorrow's technology available today. Elite engineering for data-intensive challenges.
            </p>
            <div className="flex space-x-4">
              <Github size={20} className="text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin size={20} className="text-slate-400 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">R&D Consulting</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Data Science</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Full-Stack Dev</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">FinTech Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>contact@phitopolis.com</li>
              <li>Mumbai, Maharashtra, India</li>
              <li>New York, NY, USA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>© 2024 Phitopolis Private Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: 'Hello! I am the Phitopolis Assistant. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const { askPhitopolisAI } = await import('./services/gemini.ts');
      const aiResponse = await askPhitopolisAI(userMsg);
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "I'm having trouble connecting to my brain right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-slide-up flex flex-col h-[500px]">
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles size={18} />
              <span className="font-bold text-sm">Phitopolis AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm ${
                  m.role === 'user' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-200'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-xl animate-pulse text-xs text-slate-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-800 bg-slate-900 flex space-x-2">
            <input 
              className="flex-1 bg-slate-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-primary hover:bg-primary-hover p-2 rounded-lg"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-hover w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <Sparkles size={28} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<JobDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIChatAssistant />
      </div>
    </HashRouter>
  );
}
