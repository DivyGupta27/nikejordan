import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Payment Successful</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully!</p>
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-900"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
