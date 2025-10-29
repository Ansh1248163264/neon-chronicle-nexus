import { ReactNode } from "react";
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
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center ${compact ? 'py-12' : 'py-24'}`}>
        <h1 className={`font-bold neon-text mb-4 animate-fade-in ${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in [animation-delay:0.2s]">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-fade-in [animation-delay:0.4s]">
            {children}
          </div>
        )}
      </div>
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
