import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, Mail, Calendar, Clock, CreditCard, Check, Send } from 'lucide-react';

const OrderForm = ({ cart, cartTotal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryDate: '',
    deliveryTime: '',
    paymentMethod: 'cod',
    specialInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        deliveryDate: '',
        deliveryTime: '',
        paymentMethod: 'cod',
        specialInstructions: ''
      });
    }, 3000);
  };

  const formVariants = {
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

  if (cart.length === 0) return null;

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
            whileHover={{ scale: 1.02 }}
          >
            Complete Your Order
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            Fill in your details and we'll deliver your delicious food right to your doorstep
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-google-blue" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Delivery Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-google-red" />
                  Delivery Information
                </h3>
                <div className="space-y-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all resize-none"
                        placeholder="123 Main Street, Delhi, India"
                      />
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select time</option>
                          <option value="10:00-12:00">10:00 AM - 12:00 PM</option>
                          <option value="12:00-14:00">12:00 PM - 2:00 PM</option>
                          <option value="14:00-16:00">2:00 PM - 4:00 PM</option>
                          <option value="16:00-18:00">4:00 PM - 6:00 PM</option>
                          <option value="18:00-20:00">6:00 PM - 8:00 PM</option>
                        </select>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-google-blue to-google-red text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02, y: isSubmitting || isSubmitted ? 0 : -2 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Processing...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Order Placed Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Place Order
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Cart Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-google-green" />
                Order Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-google-blue">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold">₹40</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-google-blue">₹{cartTotal + 40}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive' },
                  { id: 'card', name: 'Credit/Debit Card', desc: 'Secure online payment' },
                  { id: 'upi', name: 'UPI Payment', desc: 'Pay via UPI apps' }
                ].map((method) => (
                  <motion.label
                    key={method.id}
                    className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-google-blue transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleChange}
                      className="w-4 h-4 text-google-blue focus:ring-google-blue"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-gray-800">{method.name}</div>
                      <div className="text-sm text-gray-600">{method.desc}</div>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OrderForm;
