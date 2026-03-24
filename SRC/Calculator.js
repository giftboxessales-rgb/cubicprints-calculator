// components/Calculator.jsx
import React, { useState } from 'react';

const Calculator = ({ onQuoteGenerate }) => {
  const [formData, setFormData] = useState({
    productType: 'brochure',
    quantity: 100,
    size: 'A4',
    pages: 4,
    paperType: '80gsm',
    finishing: 'gloss',
    delivery: 'lagos'
  });

  const products = {
    brochure: { basePrice: 25 },
    flyer: { basePrice: 15 },
    banner: { basePrice: 4500 },
    sticker: { basePrice: 8 }
  };

  const calculatePrice = () => {
    const base = products[formData.productType].basePrice * formData.quantity;
    const paperMultiplier = { '80gsm': 1, '120gsm': 1.3, '250gsm': 1.8 }[formData.paperType];
    const finishingMultiplier = { 'gloss': 1.1, 'matte': 1.1, 'none': 1 }[formData.finishing];
    const deliveryCost = { 'lagos': 2000, 'other': 5000 }[formData.delivery];
    
    const total = base * paperMultiplier * finishingMultiplier + deliveryCost;
    return {
      ...formData,
      totalPrice: Math.round(total * 100) / 100,
      vat: Math.round(total * 0.075 * 100) / 100,
      grandTotal: Math.round((total + total * 0.075) * 100) / 100
    };
  };

  const handleGenerateQuote = () => {
    const quote = calculatePrice();
    onQuoteGenerate(quote);
  };

  return (
    <div className="max-w-2xl mx-auto bg-black/50 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/30">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Get Your Quote</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-yellow-100 mb-2 font-semibold">Product Type</label>
          <select 
            className="w-full p-4 bg-black/50 border border-yellow-400/50 rounded-xl text-yellow-100 focus:ring-2 focus:ring-yellow-400"
            value={formData.productType}
            onChange={(e) => setFormData({...formData, productType: e.target.value})}
          >
            <option value="brochure">Brochure</option>
            <option value="flyer">Flyer</option>
            <option value="banner">Banner</option>
            <option value="sticker">Sticker</option>
          </select>
        </div>
        
        <div>
          <label className="block text-yellow-100 mb-2 font-semibold">Quantity</label>
          <input 
            type="number"
            className="w-full p-4 bg-black/50 border border-yellow-400/50 rounded-xl text-yellow-100 focus:ring-2 focus:ring-yellow-400"
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
            min="1"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div>
          <label className="block text-yellow-100 mb-2 font-semibold">Size</label>
          <select className="w-full p-4 bg-black/50 border border-yellow-400/50 rounded-xl text-yellow-100">
            <option>A4</option>
            <option>A3</option>
            <option>A5</option>
          </select>
        </div>
        <div>
          <label className="block text-yellow-100 mb-2 font-semibold">Paper Type</label>
          <select 
            className="w-full p-4 bg-black/50 border border-yellow-400/50 rounded-xl text-yellow-100"
            value={formData.paperType}
            onChange={(e) => setFormData({...formData, paperType: e.target.value})}
          >
            <option value="80gsm">80gsm</option>
            <option value="120gsm">120gsm</option>
            <option value="250gsm">250gsm Art Paper</option>
          </select>
        </div>
      </div>

      <button 
        onClick={handleGenerateQuote}
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-6 px-8 rounded-2xl text-xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl"
      >
        Generate Quote Now
      </button>
    </div>
  );
};

export default Calculator;
