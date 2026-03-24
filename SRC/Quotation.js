// components/Quotation.jsx
import React, { useState } from 'react';

const Quotation = ({ quoteData, onBack }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  
  const companyDetails = {
    name: "Cubicprints Africa Limited",
    accountName: "Cubicprints Africa Ltd",
    accountNumber: "0123456789",
    bank: "Guaranty Trust Bank",
    branch: "Victoria Island",
    email: "orders@cubicprints.com",
    phone: "+234 809 123 4567"
  };

  const initiatePayment = async () => {
    // Flutterwave integration
    const response = await fetch('/api/payment/initiate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quoteData })
    });
    
    const { data } = await response.json();
    window.location.href = data.link; // Redirect to payment
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/30 mb-8">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBack}
            className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2"
          >
            ← Back to Calculator
          </button>
          <div className="text-2xl font-bold text-yellow-400">QUOTATION #{Date.now().toString().slice(-6)}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Quote Details */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Order Summary</h3>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between">
                <span>Product:</span>
                <span>{quoteData.productType.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{quoteData.quantity.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Paper Type:</span>
                <span>{quoteData.paperType}</span>
              </div>
              <div className="flex justify-between border-t pt-4 font-bold text-2xl">
                <span>Total (₦):</span>
                <span>{quoteData.grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Payment Details</h3>
            <div className="bg-black/50 p-6 rounded-2xl border border-yellow-400/30 space-y-4">
              <div>
                <span className="font-semibold text-yellow-100">Account Name:</span>
                <div className="font-bold text-xl text-white">{companyDetails.accountName}</div>
              </div>
              <div>
                <span className="font-semibold text-yellow-100">Account Number:</span>
                <div className="font-bold text-xl text-white">{companyDetails.accountNumber}</div>
              </div>
              <div>
                <span className="font-semibold text-yellow-100">Bank:</span>
                <div className="font-bold text-white">{companyDetails.bank}</div>
              </div>
              <div className="text-sm text-yellow-200">
                After payment, send proof to {companyDetails.email}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        {paymentStatus === 'pending' && (
          <div className="mt-12 text-center">
            <button
              onClick={initiatePayment}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-6 px-12 rounded-2xl text-2xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              Pay ₦{quoteData.grandTotal.toLocaleString()} Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotation;
