
import React from 'react';
import { SERVICES } from '../../constants';
import { CheckCircle2, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICE_TESTIMONIALS = [
  {
    quote: "We were asked to look into hundreds of papers with a tight deadline. This was going to be recurring ask so planning ahead, we built a tool that would programatically analyze the papers and sort similar ones through a custom logic. We were now able to allocate our human resources more efficiently through the initial lift done by AI.",
    author: "Tyrone"
  },
  {
    quote: "Our legacy data infrastructure was becoming a bottleneck. The team redesigned our entire pipeline to handle 10x the throughput while reducing operational costs by 40%. The migration was seamless with zero downtime.",
    author: "Marcus"
  },
  {
    quote: "We needed a custom trading platform that could execute strategies in microseconds. They delivered a system that not only met our latency requirements but also included robust risk controls and real-time monitoring dashboards.",
    author: "Elena"
  }
];

export default function ServicesPage() {
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
              <div className="flex-1 w-full bg-slate-100 rounded-3xl aspect-video relative overflow-hidden border border-slate-200 group shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                {/* Testimonial Overlay */}
                {SERVICE_TESTIMONIALS[i] && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-primary/90 backdrop-blur-sm p-5 md:p-6">
                      <Quote className="w-5 h-5 text-accent mb-2 opacity-70" />
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed line-clamp-4 mb-3">
                        {SERVICE_TESTIMONIALS[i].quote}
                      </p>
                      <p className="text-accent font-bold text-xs">
                        — {SERVICE_TESTIMONIALS[i].author}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnerships Section — Outcome-First, Calm Premium Design */}
      <section className="py-28 md:py-36 bg-[#fafafa] border-t border-slate-100">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary leading-tight tracking-tight">
              Flexible partnerships.<br />
              Serious outcomes.
            </h2>
            <p className="text-base md:text-lg text-slate-500 mt-6 leading-relaxed max-w-xl">
              From rapid launches to long-term scale, we adapt to your product's stage—not the other way around.
            </p>
          </motion.header>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1: Dedicated Team (Subtly Emphasized) */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 flex flex-col partnership-card partnership-card-featured"
            >
              {/* Subtle top accent */}
              <div className="w-12 h-0.5 bg-primary/20 mb-8 group-hover:bg-primary/40 transition-colors duration-300" />

              {/* Label */}
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                Dedicated Team
              </span>

              {/* Outcome Headline */}
              <h3 className="text-xl lg:text-2xl font-display font-semibold text-primary leading-snug mb-4">
                Scale without hiring chaos
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                A fully embedded, cross-functional squad that works as an extension of your organization—aligned to your roadmap, culture, and long-term vision.
              </p>

              {/* Best For */}
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Best for scaling products, long-term development, and complex platforms.
              </p>

              {/* Micro-metric */}
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-400">3–6 month average ramp-up</span>
              </div>
            </motion.article>

            {/* Card 2: Project Based */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 flex flex-col partnership-card"
            >
              {/* Subtle top accent */}
              <div className="w-12 h-0.5 bg-slate-200 mb-8 group-hover:bg-slate-300 transition-colors duration-300" />

              {/* Label */}
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                Project Based
              </span>

              {/* Outcome Headline */}
              <h3 className="text-xl lg:text-2xl font-display font-semibold text-primary leading-snug mb-4">
                Ship faster, with clarity
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                For well-defined initiatives where speed and certainty matter. We own delivery from discovery to launch, with fixed timelines and outcomes.
              </p>

              {/* Best For */}
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Best for MVPs, feature launches, and proofs of concept.
              </p>

              {/* Micro-metric */}
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-400">Typical delivery: 6–12 weeks</span>
              </div>
            </motion.article>

            {/* Card 3: Staff Augmentation */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 flex flex-col partnership-card"
            >
              {/* Subtle top accent */}
              <div className="w-12 h-0.5 bg-slate-200 mb-8 group-hover:bg-slate-300 transition-colors duration-300" />

              {/* Label */}
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                Staff Augmentation
              </span>

              {/* Outcome Headline */}
              <h3 className="text-xl lg:text-2xl font-display font-semibold text-primary leading-snug mb-4">
                Add expertise where it matters
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                Integrate experienced specialists directly into your team to close skill gaps and maintain momentum without long hiring cycles.
              </p>

              {/* Best For */}
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Best for short-term needs, specialized skills, and delivery acceleration.
              </p>

              {/* Micro-metric */}
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-400">Onboarded in days, not months</span>
              </div>
            </motion.article>

          </div>
        </div>

        {/* Minimal styles for subtle hover */}
        <style>{`
          .partnership-card {
            transition: border-color 0.3s ease, background-color 0.3s ease;
          }
          .partnership-card:hover {
            border-color: #cbd5e1;
            background-color: #ffffff;
          }
          .partnership-card-featured {
            border-color: #e2e8f0;
            background-color: #ffffff;
          }
          .partnership-card-featured:hover {
            border-color: #94a3b8;
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .partnership-card {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
