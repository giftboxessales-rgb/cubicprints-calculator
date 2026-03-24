import React, { useState } from 'react';

const Quotation = ({ quoteData, onBack }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  
  const companyDetails = {
    name: "Cubicprints Africa Limited",
    accountName: "Cubicprints Africa Ltd",
    accountNumber: "0123456789",
    bank: "Guaranty Trust Bank",
    branch: "Victoria Island, Lagos",
    email: "orders@cubicprints.com",
    phone: "+234 809 123 4567"
  };

  const handlePay = () => {
    setPaymentStatus('processing');
    // Simulate payment
    setTimeout(() => {
      setPaymentStatus('success');
      alert('Payment successful! Order fulfillment officer notified.');
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={onBack}
          className="text-yellow-400 hover:text-yellow-300 font-bold text-xl flex items-center gap-2 p-4 rounded-xl hover:bg-yellow-400/10 transition-all"
        >
          <i className="fas fa-arrow-left"></i>
          Edit Order
        </button>
        <div className="text-3xl font-black text-yellow-400">
          QUOTE #{Math.floor(Math.random() * 10000)}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30">
          <h3 className="text-2xl font-black text-yellow-400 mb-6 flex items-center gap-3">
            <i className="fas fa-receipt"></i> Order Summary
          </h3>
          <div className="space-y-4 text-xl">
            <div className="flex justify-between py-2">
              <span>Product:</span>
              <span className="font-bold">{quoteData.productType.toUpperCase()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Quantity:</span>
              <span className="font-bold">{quoteData.quantity.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Paper:</span>
              <span>{quoteData.paperType}</span>
            </div>
            <div className="flex justify-between py-2 border-t-2 pt-4">
              <span className="text-3xl font-black text-yellow-400">TOTAL:</span>
              <span className="text-4xl font-black text-yellow-400">₦{quoteData.grandTotal?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30">
          <h3 className="text-2xl font-black text-yellow-400 mb-6 flex items-center gap-3">
            <i className="fas fa-credit-card"></i> Bank Transfer
          </h3>
          <div className="space-y-4 bg-gradient-to-b from-yellow-500/10 to-yellow-600/10 p-6 rounded-2xl border-2 border-yellow-400/30">
            <div>
              <span className="font-semibold text-yellow-100 block mb-1">Account Name:</span>
              <div className="font-black text-2xl text-white">{companyDetails.accountName}</div>
            </div>
            <div>
              <span className="font-semibold text-yellow-100 block mb-1">Account Number:</span>
              <div className="font-black text-3xl text-white">{companyDetails.accountNumber}</div>
            </div>
            <div>
              <span className="font-semibold text-yellow-100 block mb-1">Bank:</span>
              <div className="font-bold text-xl text-white">{companyDetails.bank} - {companyDetails.branch}</div>
            </div>
            <div className="text-sm text-yellow-200 mt-4 p-3 bg-black/50 rounded-xl">
              💡 After payment, WhatsApp proof: <br/>
              <strong>+234 809 123 4567</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      {paymentStatus === 'pending' && (
        <div className="text-center">
          <button
            onClick={handlePay}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-black py-6 px-12 rounded-2xl text-2xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl border-4 border-green-400/50 mx-auto"
          >
            <i className="fas fa-credit-card text-xl"></i>
            Pay ₦{quoteData.grandTotal?.toLocaleString()} Now
          </button>
          <p className="text-yellow-200 mt-4 text-lg">Secure payment. Instant order confirmation.</p>
        </div>
      )}

      {paymentStatus === 'processing' && (
        <div className="text-center p-12">
          <div className="inline-block animate-spin w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl mb-6"></div>
          <p className="text-2xl font-bold text-green-400">Processing Payment...</p>
        </div>
      )}

      {paymentStatus === 'success' && (
        <div className="text-center p-12 bg-green-500/20 backdrop-blur-xl rounded-3xl border-2 border-green-400/50">
          <i className="fas fa-check-circle text-6xl text-green-400 mb-6"></i>
          <h2 className="text-3xl font-black text-green-400 mb-4">Payment Successful!</h2>
          <p className="text-xl text-green-200 mb-8">Order fulfillment officer notified. Expect call within 30 mins.</p>
          <div className="bg-black/50 p-6 rounded-2xl inline-block">
            <p className="font-bold text-lg">Order Reference: CP-{Math.floor(Math.random() * 1000000)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotation;
