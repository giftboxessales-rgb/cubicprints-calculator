import React from 'react';

const WelcomePopup = ({ onClose, setStep }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div className="bg-gradient-to-b from-black/95 to-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 max-w-sm w-full border-2 border-yellow-400/30 shadow-2xl animate-slideUp">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-yellow-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
          <i className="fas fa-cube text-3xl text-black font-bold"></i>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Welcome!</h2>
        <p className="text-yellow-100 text-lg leading-relaxed">
          Calculate your packaging costs instantly. 
          Professional quotes in seconds.
        </p>
      </div>
      
      <div className="space-y-4">
        <button 
          onClick={() => {
            setStep('calculator');
            onClose();
          }}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-6 rounded-2xl text-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          <i className="fas fa-calculator mr-2"></i>
          Start Calculating
        </button>
        <button 
          onClick={onClose}
          className="w-full text-yellow-400 hover:text-yellow-300 font-semibold py-3 border border-yellow-400/50 rounded-xl transition-all duration-200 hover:bg-yellow-400/10"
        >
          Skip for now
        </button>
      </div>
    </div>
  </div>
);

export default WelcomePopup;
