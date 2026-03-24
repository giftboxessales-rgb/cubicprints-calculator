import React from 'react';

const WelcomePopup = ({ onClose, setStep }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-gradient-to-b from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 max-w-md w-full border-2 border-yellow-400/30 shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-yellow-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
          <i className="fas fa-cube text-3xl text-black font-bold"></i>
        </div>
        <h2 className="text-3xl font-black text-white mb-4">Welcome to Cubicprints!</h2>
        <p className="text-yellow-100 text-lg leading-relaxed">
          Calculate your packaging costs instantly. 
          Get professional quotes in seconds.
        </p>
      </div>
      
      <div className="space-y-4">
        <button 
          onClick={() => {
            setStep('calculator');
            onClose();
          }}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-5 px-8 rounded-2xl text-xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Start Calculating
        </button>
        <button 
          onClick={onClose}
          className="w-full text-yellow-400 hover:text-yellow-300 font-semibold py-3 border border-yellow-400/50 rounded-xl transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  </div>
);

export default WelcomePopup;
