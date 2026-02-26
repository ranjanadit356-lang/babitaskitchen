import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Clock, MapPin, Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Star, text: "4.9/5 Rating", color: "text-yellow-400" },
    { icon: Clock, text: "30 Min Delivery", color: "text-green-400" },
    { icon: MapPin, text: "5km Radius", color: "text-blue-400" }
  ];

  // Clean and minimal product showcase
  const showcaseProducts = [
    { 
      id: 1, 
      image: "/Images/mango achar.avif", 
      title: "Mango Pickle",
      position: { top: "25%", left: "8%" }
    },
    { 
      id: 2, 
      image: "/Images/papad.avif", 
      title: "Crispy Papad", 
      position: { top: "25%", right: "8%" }
    },
    { 
      id: 3, 
      image: "/Images/chips.avif", 
      title: "Aloo Chips", 
      position: { bottom: "25%", left: "8%" }
    },
    { 
      id: 4, 
      image: "/Images/combinations of foood.avif", 
      title: "Combo Pack", 
      position: { bottom: "25%", right: "8%" }
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-google-blue via-google-red to-google-yellow"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(234, 67, 53, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(251, 188, 4, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(52, 168, 83, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Clean Product Showcase - Less Clutter */}
      {showcaseProducts.map((product, index) => (
        <motion.div
          key={product.id}
          className="absolute"
          style={{
            top: product.position.top,
            left: product.position.left,
            right: product.position.right,
            bottom: product.position.bottom
          }}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{
            opacity: 0.7,
            scale: 1,
            y: 0,
            x: mousePosition.x * 0.01
          }}
          transition={{
            delay: index * 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          whileHover={{ 
            opacity: 1,
            scale: 1.05,
            zIndex: 50
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Clean Product Image */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-lg glass-effect border border-white/10">
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Product Name on Hover */}
              <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-bold text-center drop-shadow">
                  {product.title}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content - Center Focus */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
              <motion.img
                src="/Images/logo.jpg"
                alt="Babita's Kitchen Logo"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Clean Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="block drop-shadow-2xl stroke-black stroke-2">Babita's</span>
            <span className="block text-yellow-300 font-black drop-shadow-2xl stroke-black stroke-2">Kitchen</span>
          </motion.h1>

          {/* Clean Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Authentic homemade desi delicacies
            <br />
            <span className="text-yellow-200 font-medium">Made with love, delivered with care</span>
          </motion.p>

          {/* Clean Features */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm"
              >
                <feature.icon className={`w-4 h-4 inline mr-2 ${feature.color}`} />
                {feature.text}
              </div>
            ))}
          </motion.div>

          {/* Clean CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button
              className="bg-white text-google-blue px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="inline-block w-5 h-5 mr-2" />
              Order Now
            </motion.button>
            
            <motion.button
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="inline-block w-5 h-5 mr-2" />
              Watch Story
            </motion.button>
          </motion.div>

          {/* Clean Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
