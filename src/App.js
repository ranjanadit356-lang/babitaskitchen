import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { products, categories } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    showNotification(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const showNotification = (message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => 
        categories.find(cat => cat.name === selectedCategory)?.name.toLowerCase() === product.category
      );

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main Content - Only show after loading */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Notifications */}
          <AnimatePresence>
            {notifications.map(notification => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                className="fixed top-4 right-4 z-50 glass-effect text-white px-6 py-3 rounded-lg shadow-lg"
              >
                {notification.message}
              </motion.div>
            ))}
          </AnimatePresence>

          <Header 
            cartCount={cartCount} 
            onCartClick={() => setIsCartOpen(true)}
          />
          
          <Hero />
          
          <ProductGrid 
            products={filteredProducts}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onAddToCart={addToCart}
          />
          
          <OrderForm cart={cart} cartTotal={cartTotal} />
          
          <Footer />
          
          <AnimatePresence>
            {isCartOpen && (
              <Cart
                cart={cart}
                cartTotal={cartTotal}
                onClose={() => setIsCartOpen(false)}
                onRemoveFromCart={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default App;
