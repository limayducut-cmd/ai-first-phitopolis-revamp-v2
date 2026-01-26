import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { apolloClient } from "../../lib/apollo-client";
import { GET_CAREERS } from "../../lib/graphql/queries";

interface Career {
  id: string;
  job_title: string;
  slug: string;
  department: string;
  location: string;
  job_type: string;
  short_description?: string;
}

interface CareersData {
  careers: Career[];
}

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const result = await apolloClient.query<CareersData>({
          query: GET_CAREERS,
        });

        console.log("GraphQL Response:", result);

        if (result.error) {
          console.error("GraphQL Error:", result.error);
          setError(`GraphQL Error: ${result.error.message}`);
        }

        setCareers(result.data.careers || []);
      } catch (error: any) {
        console.error("Error fetching careers:", error);
        setError(error.message || "Failed to fetch careers");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const BENEFITS = [
    {
      label: "Compensation",
      headline: "Rewarded for impact, not hours",
      description: "Industry-leading base salary paired with meaningful equity participation. Your contributions directly shape our success—and you share in the upside.",
      bestFor: "Includes annual performance reviews, transparent pay bands, and equity refresh grants.",
      metric: "Top 10% of market rates"
    },
    {
      label: "Growth",
      headline: "Never stop learning",
      description: "A generous annual budget for conferences, certifications, courses, and books. We invest in your growth because your expertise is our competitive advantage.",
      bestFor: "Covers tuition, conferences, online courses, technical certifications, and learning materials.",
      metric: "Dedicated learning budget per year"
    },
    {
      label: "Wellbeing",
      headline: "Your health comes first",
      description: "Comprehensive health coverage for you and your family, plus mental wellness support. We believe sustainable performance starts with genuine care.",
      bestFor: "Includes medical, dental, vision, and access to mental health resources.",
      metric: "100% premium coverage"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero - Static */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Build the future of engineering.
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              Join our team of mathematicians, physicists, and engineers
              building the next generation of high-performance technology.
            </p>
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-accent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 font-bold mb-2">Error loading careers</p>
              <p className="text-slate-500 text-sm">{error}</p>
              <p className="text-slate-400 text-xs mt-4">Check browser console for details</p>
            </div>
          ) : careers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">
                No careers available at the moment.
              </p>
              <p className="text-slate-400 text-xs mt-2">Check browser console for details</p>
            </div>
          ) : (
            <div className="space-y-6">
              {careers.map((job: Career, idx: number) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Link
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
                            <Clock size={14} className="mr-1 text-accent" />{" "}
                            {job.job_type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-primary group-hover:text-primary-light transition-colors">
                          {job.job_title}
                        </h3>
                        <div className="flex items-center space-x-6 text-sm text-slate-500">
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-2 text-accent" />{" "}
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase size={16} className="mr-2 text-accent" />{" "}
                            Remote Friendly
                          </span>
                        </div>
                      </div>
                      <button className="px-8 py-3 bg-accent text-primary rounded-full font-bold hover:bg-accent-hover transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
                        Apply Now
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section — Calm Premium Design (matching Partnerships section) */}
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
              Built for people<br />
              who build.
            </h2>
            <p className="text-base md:text-lg text-slate-500 mt-6 leading-relaxed max-w-xl">
              We take care of our team so they can focus on solving hard problems and doing their best work.
            </p>
          </motion.header>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 flex flex-col benefit-card ${idx === 0 ? 'benefit-card-featured' : ''}`}
              >
                {/* Subtle top accent */}
                <div className={`w-12 h-0.5 mb-8 transition-colors duration-300 ${idx === 0 ? 'bg-primary/20 group-hover:bg-primary/40' : 'bg-slate-200 group-hover:bg-slate-300'}`} />

                {/* Label */}
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                  {benefit.label}
                </span>

                {/* Headline */}
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-primary leading-snug mb-4">
                  {benefit.headline}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {benefit.description}
                </p>

                {/* Best For / Includes */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {benefit.bestFor}
                </p>

                {/* Micro-metric */}
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400">{benefit.metric}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Subtle hover styles */}
        <style>{`
          .benefit-card {
            transition: border-color 0.3s ease, background-color 0.3s ease;
          }
          .benefit-card:hover {
            border-color: #cbd5e1;
            background-color: #ffffff;
          }
          .benefit-card-featured {
            border-color: #e2e8f0;
            background-color: #ffffff;
          }
          .benefit-card-featured:hover {
            border-color: #94a3b8;
          }

          @media (prefers-reduced-motion: reduce) {
            .benefit-card {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
