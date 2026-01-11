import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--primary))] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--accent))] rounded-full blur-[128px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
          <span className="text-sm text-[hsl(var(--muted-foreground))]">
            Introducing Nexus 2.0 — Now with AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          Build the Future with
          <br />
          <span className="gradient-text">Next-Gen Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-10"
        >
          Empower your workflow with cutting-edge tools designed for modern teams.
          Ship faster, scale smarter, and deliver exceptional experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group px-8 py-4 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold glow-primary hover:scale-105 transition-transform flex items-center gap-2">
            Start Building Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-xl glass text-[hsl(var(--foreground))] font-semibold hover:bg-[hsl(var(--secondary))] transition-colors">
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '50+', label: 'Integrations' },
            { value: '4.9/5', label: 'User Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
