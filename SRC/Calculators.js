import React, { useState, useEffect } from 'react';

const Calculator = ({ onQuoteGenerate }) => {
  const [formData, setFormData] = useState({
    productType: 'brochure',
    quantity: 100,
    size: 'A4',
    paperType: '80gsm',
    finishing: 'gloss',
    delivery: 'lagos'
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [formData]);

  const calculatePrice = () => {
    const products = {
      brochure: 25, flyer: 15, banner: 4500, sticker: 8
    };
    const base = products[formData.productType] * formData.quantity;
    const paperMultiplier = { '80gsm': 1, '120gsm': 1.3, '250gsm': 1.8 }[formData.paperType];
    const finishingMultiplier = { 'gloss': 1.1, 'matte': 1.1, 'none': 1 }[formData.finishing];
    const deliveryCost = { 'lagos': 2000, 'other': 5000 }[formData.delivery];
    
    const subtotal = base * paperMultiplier * finishingMultiplier;
    const total = subtotal + deliveryCost;
    const vat = total * 0.075;
    const grandTotal = total + vat;
    
    setPrice({
      subtotal: Math.round(subtotal),
      delivery: deliveryCost,
      vat: Math.round(vat),
      grandTotal: Math.round(grandTotal)
    });
  };

  const handleGenerateQuote = () => {
    onQuoteGenerate({ ...formData, ...price });
  };

  return (
    <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/30 shadow-2xl">
      <h2 className="text-3xl font-black text-yellow-400 mb-8 text-center">Get Instant Quote</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-yellow-100 mb-3 font-semibold text-lg">Product Type</label>
          <select 
            className="w-full p-4 bg-black/50 border-2 border-yellow-400/50 rounded-xl text-yellow-100 text-lg focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all"
            value={formData.productType}
            onChange={(e) => setFormData({...formData, productType: e.target.value})}
          >
            <option value="brochure">📄 Brochure</option>
            <option value="flyer">📃 Flyer</option>
            <option value="banner">📏 Banner</option>
            <option value="sticker">🏷️ Sticker</option>
          </select>
        </div>
        
        <div>
          <label className="block text-yellow-100 mb-3 font-semibold text-lg">Quantity</label>
          <input 
            type="number"
            className="w-full p-4 bg-black/50 border-2 border-yellow-400/50 rounded-xl text-yellow-100 text-lg focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all"
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value) || 0})}
            min="1"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div>
          <label className="block text-yellow-100 mb-3 font-semibold text-lg">Paper Type</label>
          <select 
            className="w-full p-4 bg-black/50 border-2 border-yellow-400/50 rounded-xl text-yellow-100 text-lg"
            value={formData.paperType}
            onChange={(e) => setFormData({...formData, paperType: e.target.value})}
          >
            <option value="80gsm">📄 80gsm (Standard)</option>
            <option value="120gsm">📄 120gsm (Medium)</option>
            <option value="250gsm">📄 250gsm (Premium)</option>
          </select>
        </div>
        <div>
          <label className="block text-yellow-100 mb-3 font-semibold text-lg">Finishing</label>
          <select 
            className="w-full p-4 bg-black/50 border-2 border-yellow-400/50 rounded-xl text-yellow-100 text-lg"
            value={formData.finishing}
            onChange={(e) => setFormData({...formData, finishing: e.target.value})}
          >
            <option value="gloss">✨ Gloss Lamination</option>
            <option value="matte">🧿 Matte Lamination</option>
            <option value="none">➖ None</option>
          </select>
        </div>
      </div>

      {/* Live Price Preview */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/50 mb-8">
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>Subtotal:</div>
          <div className="font-bold text-right">₦{price.subtotal?.toLocaleString()}</div>
          <div>Delivery:</div>
          <div className="font-bold text-right">₦{price.delivery?.toLocaleString()}</div>
          <div>VAT (7.5%):</div>
          <div className="font-bold text-right">₦{price.vat?.toLocaleString()}</div>
          <div className="border-t pt-4 md:col-span-2">
            <span className="text-2xl font-black text-yellow-400">Grand Total:</span>
            <span className="text-3xl font-black text-yellow-400 block text-right mt-1">₦{price.grandTotal?.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleGenerateQuote}
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-6 px-8 rounded-2xl text-2xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl border-4 border-yellow-300/50"
      >
        <i className="fas fa-file-invoice-dollar mr-3"></i>
        Generate Quote & Pay Now
      </button>
    </div>
  );
};

export default Calculator;
