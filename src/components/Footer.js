import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, Heart, Star, ChefHat, Truck } from 'lucide-react';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  const productCategories = [
    { name: 'Pickles', icon: '🥭' },
    { name: 'Papad', icon: '🫓' },
    { name: 'Chips', icon: '🥔' },
    { name: 'Combos', icon: '🎁' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 98765 43210', label: 'Phone' },
    { icon: Mail, text: 'order@babitaskitchen.com', label: 'Email' },
    { icon: MapPin, text: 'Delhi, India', label: 'Address' },
    { icon: Clock, text: '10:00 AM - 10:00 PM', label: 'Hours' }
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 to-black text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Newsletter Section */}
      <motion.div
        className="bg-gradient-to-r from-google-blue to-google-red py-12"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            className="text-3xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Get Exclusive Offers!
          </motion.h3>
          <motion.p
            className="text-lg mb-6 opacity-90"
            variants={itemVariants}
          >
            Subscribe to our newsletter and get 10% off on your first order
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            variants={itemVariants}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              className="px-8 py-3 bg-white text-google-blue rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-google-blue to-google-red flex items-center justify-center text-white font-bold text-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                BK
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold">Babita's Kitchen</h3>
                <p className="text-sm opacity-80">Authentic Desi Food</p>
              </div>
            </div>
            
            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Bringing you the authentic taste of homemade Indian delicacies, crafted with love and traditional recipes passed down through generations.
            </motion.p>

            <motion.div
              className="flex gap-3"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-google-blue rounded-full" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-google-yellow" />
              Our Products
            </h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <motion.li
                  key={category.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href="#menu"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5 text-google-green" />
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={info.label}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <info.icon className="w-5 h-5 text-google-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-gray-300">{info.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-sm flex items-center gap-2"
              variants={itemVariants}
            >
              © 2024 Babita's Kitchen. All rights reserved.
              <Heart className="w-4 h-4 text-red-500" />
              Made with love in India
            </motion.p>
            
            <motion.div
              className="flex gap-6 text-sm"
              variants={itemVariants}
            >
              <motion.a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#refund"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Refund Policy
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-google-blue/20 to-google-red/20 blur-2xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-google-yellow/20 to-google-green/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </motion.footer>
  );
};

export default Footer;
