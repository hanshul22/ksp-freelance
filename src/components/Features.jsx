import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Layers, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-millisecond response times for seamless experiences.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with SOC2, HIPAA, and GDPR standards.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy to 200+ edge locations worldwide with automatic failover and load balancing.',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Build with composable components that grow with your business needs.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor everything with live dashboards and customizable alerts.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless teamwork with role-based access controls.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="gradient-text"> Succeed</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Powerful features designed to accelerate your development and delight your users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:bg-[hsl(var(--secondary))] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[hsl(var(--primary-foreground))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">
                {feature.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
