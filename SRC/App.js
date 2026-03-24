import React, { useState } from 'react';
import WelcomePopup from './WelcomePopup';
import Calculator from './Calculator';
import Quotation from './Quotation';

function App() {
  const [step, setStep] = useState('welcome');
  const [quoteData, setQuoteData] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a2 2 0 002 2h12a2 2 0 002-2V7l-7-5z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                CUBICPRINTS
              </h1>
              <p className="text-yellow-100 text-lg font-semibold mt-1">Africa</p>
            </div>
          </div>
          <p className="text-xl text-yellow-100/80 max-w-2xl mx-auto leading-relaxed">
            Instant Packaging Price Calculator - Get quotes in seconds
          </p>
        </header>

        {showWelcome && step === 'welcome' && (
          <WelcomePopup onClose={() => setShowWelcome(false)} setStep={setStep} />
        )}
        
        {step === 'calculator' && (
          <Calculator onQuoteGenerate={(data) => {
            setQuoteData(data);
            setStep('quotation');
          }} />
        )}
        
        {step === 'quotation' && quoteData && (
          <Quotation quoteData={quoteData} onBack={() => setStep('calculator')} />
        )}
      </div>
    </div>
  );
}

export default App;
