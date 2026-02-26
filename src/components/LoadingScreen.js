import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    // Show logo for 2.5 seconds, then start burst animation
    const timer = setTimeout(() => {
      setShowBurst(true);
      // Start burst animation for 1.5 seconds, then complete
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500);
      }, 1500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Create burst particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 20,
    delay: i * 0.05
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-google-blue via-google-red to-google-yellow"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Main Logo Container */}
      <motion.div
        className="relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: showBurst ? 0 : 1,
          opacity: showBurst ? 0 : 1
        }}
        transition={{ 
          duration: showBurst ? 0.5 : 1,
          ease: showBurst ? "easeIn" : "easeOut"
        }}
      >
        {/* Logo */}
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/50"
          animate={{
            boxShadow: !showBurst ? [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 40px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ] : "0 0 60px rgba(255,255,255,0)",
            rotate: !showBurst ? [0, 5, -5, 0] : 0
          }}
          transition={{
            duration: 2,
            repeat: !showBurst ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <img
            src="/Images/logo.jpg"
            alt="Babita's Kitchen Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-black text-white mt-4 text-center"
          animate={{
            textShadow: !showBurst ? [
              "0 0 10px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,1)",
              "0 0 10px rgba(255,255,255,0.8)"
            ] : "0 0 30px rgba(255,255,255,0)",
            scale: showBurst ? 0 : 1
          }}
          transition={{
            duration: 2,
            repeat: !showBurst ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          Babita's Kitchen
        </motion.h1>
      </motion.div>

      {/* Burst Particles */}
      <AnimatePresence>
        {showBurst && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: `hsl(${particle.angle}, 70%, 60%)`,
              boxShadow: `0 0 10px hsl(${particle.angle}, 70%, 60%)`
            }}
            initial={{ 
              scale: 0,
              opacity: 0,
              x: 0,
              y: 0
            }}
            animate={{
              scale: [0, 1.5, 0.5],
              opacity: [0, 1, 0],
              x: Math.cos((particle.angle * Math.PI) / 180) * 200,
              y: Math.sin((particle.angle * Math.PI) / 180) * 200,
              rotate: [0, 360]
            }}
            transition={{
              duration: 1.5,
              delay: particle.delay,
              ease: "easeOut"
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      {/* Additional Burst Effect - Logo Fragments */}
      <AnimatePresence>
        {showBurst && (
          <>
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={`fragment-${i}`}
                className="absolute w-8 h-8 rounded-full overflow-hidden"
                style={{
                  clipPath: `polygon(${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}% ${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%, 50% 50%, ${50 + 40 * Math.cos(((i + 1) * 45 * Math.PI) / 180)}% ${50 + 40 * Math.sin(((i + 1) * 45 * Math.PI) / 180)}%)`
                }}
                initial={{ 
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                animate={{
                  scale: [1, 0.3],
                  opacity: [1, 0],
                  x: Math.cos((i * 45 * Math.PI) / 180) * 300,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 300,
                  rotate: [0, 720]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
                exit={{ opacity: 0 }}
              >
                <img
                  src="/Images/logo.jpg"
                  alt="Fragment"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(2) translate(${-50 * Math.cos((i * 45 * Math.PI) / 180)}%, ${-50 * Math.sin((i * 45 * Math.PI) / 180)}%)`
                  }}
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Loading Text */}
      {!showBurst && (
        <motion.div
          className="absolute bottom-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-lg md:text-xl text-yellow-300 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Preparing your delicious experience...
          </motion.p>
          
          {/* Loading Dots */}
          <motion.div className="flex justify-center gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoadingScreen;
