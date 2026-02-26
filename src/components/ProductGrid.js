import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Clock, Sparkles, Heart, Eye } from 'lucide-react';

const ProductGrid = ({ products, categories, selectedCategory, onCategoryChange, onAddToCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            Our Delicious Products
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Handcrafted with love, using traditional recipes passed down through generations
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r from-${category.color} to-${category.color}-dark text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Card */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-google-red to-google-yellow text-white text-xs font-bold shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Sparkles className="inline-block w-3 h-3 mr-1" />
                        {product.badge}
                      </motion.div>
                    )}

                    {/* Quick Actions */}
                    <motion.div
                      className="absolute top-4 right-4 flex flex-col gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: hoveredProduct === product.id ? 1 : 0,
                        x: hoveredProduct === product.id ? 0 : 20
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.button
                        className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-4 h-4 text-red-500" />
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-4 h-4 text-blue-500" />
                      </motion.button>
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                      className="absolute bottom-4 left-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredProduct === product.id ? 1 : 0.8,
                        y: hoveredProduct === product.id ? 0 : 10
                      }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs font-semibold">{product.rating}</span>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-800 mb-2"
                      whileHover={{ color: "#4285F4" }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-600 text-sm mb-4 line-clamp-2"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {product.description}
                    </motion.p>

                    {/* Price & Time */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-google-blue">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Clock className="w-3 h-3" />
                          <span>{product.prepTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      onClick={() => onAddToCart(product)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-google-blue to-google-red text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart className="inline-block w-4 h-4 mr-2" />
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                {hoveredProduct === product.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-google-blue/20 to-google-red/20 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {products.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
