import { ReactNode } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
}

const Hero = ({ title, subtitle, children, compact = false }: HeroProps) => {
  return (
    <section 
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)' }}
      />
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-secondary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{ boxShadow: '0 0 30px hsl(var(--neon-magenta) / 0.5)' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.5)' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={{ boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)' }}
      />
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center ${compact ? 'py-12' : 'py-24'}`}>
        <motion.h1 
          className={`font-bold neon-text mb-4 ${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
        
        {/* Decorative data lines */}
        {!compact && (
          <motion.div
            className="mt-8 flex justify-center gap-4 text-sm font-mono text-primary/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="border border-primary/30 px-3 py-1 rounded-sm" style={{ boxShadow: '0 0 10px hsl(var(--neon-cyan) / 0.3)' }}>
              SYSTEM: ONLINE
            </span>
            <span className="border border-secondary/30 px-3 py-1 rounded-sm" style={{ boxShadow: '0 0 10px hsl(var(--neon-magenta) / 0.3)' }}>
              STATUS: READY
            </span>
          </motion.div>
        )}
      </div>
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Animated scan lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan))' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        style={{ boxShadow: '0 0 20px hsl(var(--neon-magenta))' }}
      />
    </section>
  );
};

export default Hero;
