
import React, { useState } from 'react';
import { SERVICES } from '../../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Star Wars crawl component
function StarWarsCrawl({ story, isVisible }: { story: string; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-primary/80 flex items-end justify-center overflow-hidden"
          style={{ perspective: '400px' }}
        >
          {/* Gradient fade at top */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-primary/90 to-transparent z-10 pointer-events-none" />

          {/* Crawling text container */}
          <div
            className="absolute inset-0 flex justify-center"
            style={{
              perspective: '300px',
              perspectiveOrigin: '50% 100%'
            }}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '-100%' }}
              transition={{
                duration: 15,
                ease: 'linear',
                repeat: Infinity
              }}
              className="w-full px-6 text-center"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(25deg)',
                transformOrigin: '50% 100%'
              }}
            >
              <p className="text-amber-300 font-display text-lg md:text-xl leading-relaxed tracking-wide">
                {story}
              </p>
            </motion.div>
          </div>

          {/* Subtle star effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(1px 1px at 20px 30px, white, transparent), radial-gradient(1px 1px at 40px 70px, white, transparent), radial-gradient(1px 1px at 50px 160px, white, transparent), radial-gradient(1px 1px at 90px 40px, white, transparent), radial-gradient(1px 1px at 130px 80px, white, transparent), radial-gradient(1px 1px at 160px 120px, white, transparent)',
              backgroundSize: '200px 200px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen text-primary overflow-x-hidden">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-accent font-bold tracking-widest uppercase text-xs">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 mb-8 text-primary">
            Technical excellence at every layer.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Phitopolis combines deep domain knowledge in finance and technology with modern engineering practices
            to deliver systems that are performant, scalable, and secure.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-start`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-primary" })}
                </div>
                <h2 className="text-4xl font-display font-bold text-primary">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description} We leverage state-of-the-art tools and methodologies to ensure your project
                  not only meets but exceeds industry standards for performance and reliability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="flex-1 w-full bg-slate-100 rounded-3xl aspect-video relative overflow-hidden border border-slate-200 group shadow-lg cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredIndex === i ? 'scale-110 grayscale' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === i ? 'opacity-0' : 'opacity-100'
                }`}></div>
                <StarWarsCrawl story={service.story} isVisible={hoveredIndex === i} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">How we work.</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">Flexible engagement models tailored to your team's needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Dedicated Team</h3>
              <p className="text-sm text-slate-600">A full cross-functional squad embedded into your organization for long-term vision.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Project Based</h3>
              <p className="text-sm text-slate-600">Clear scope, fixed timeline, and defined deliverables for rapid prototype or feature launch.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Staff Augmentation</h3>
              <p className="text-sm text-slate-600">Elite specialists to bolster your existing engineering or data science capabilities.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
