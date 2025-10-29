import { motion } from 'framer-motion';

export const AnimatedGradient = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(189 100% 50% / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(320 100% 50% / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, hsl(280 100% 60% / 0.1) 0%, transparent 40%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Animated scan lines */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--neon-cyan)) 0px, transparent 2px, transparent 4px)',
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
