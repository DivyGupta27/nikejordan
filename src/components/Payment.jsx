import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

const Payment = () => {
const navigate=useNavigate()
  const [selectedMethod, setSelectedMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });
  const [upiID, setUpiID] = useState('');

  const handlePayment = () => {
    if (selectedMethod === 'card') {
      const { cardNumber, expiry, cvv, name } = cardDetails;
      if (!cardNumber || !expiry || !cvv || !name) {
        toast.error('Please fill in all card details',{
            position:"top-center"
        });
        return;
      }
    }

    if (selectedMethod === 'upi' && !upiID) {
      toast.error('Please enter your UPI ID',{
        position:"top-center"
      });
      return;
    }
   else{
     toast.success('Payment processed successfully!',{
         position:"top-center"
     })
     navigate('/success')

   }

  };

  return (
    <div className="max-w-xl m-8 mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={selectedMethod === 'cod'}
            onChange={() => setSelectedMethod('cod')}
          />
          Cash on Delivery (COD)
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={selectedMethod === 'upi'}
            onChange={() => setSelectedMethod('upi')}
          />
          UPI Payment
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={() => setSelectedMethod('card')}
          />
          Credit/Debit Card
        </label>
      </div>

      {/* Conditional Forms */}
      <div className="mt-6">
        {selectedMethod === 'cod' && (
          <p className="text-gray-700">You will pay in cash when the order is delivered.</p>
        )}

        {selectedMethod === 'upi' && (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Enter UPI ID (e.g. 1234567890@upi)"
              className="w-full p-2 border border-gray-300 rounded"
              value={upiID}
              onChange={(e) => setUpiID(e.target.value)}
            />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Verify UPI
            </button>
          </div>
        )}

        {selectedMethod === 'card' && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border border-gray-300 rounded"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border border-gray-300 rounded"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="CVV"
                className="w-full p-2 border border-gray-300 rounded"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 border border-gray-300 rounded"
              value={cardDetails.name}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, name: e.target.value })
              }
            />
          </div>
        )}
      </div>

      <button
        className="w-full bg-black text-white mt-6 py-3 rounded hover:bg-gray-800"
        onClick={handlePayment}
      >
        Complete Payment
      </button>
    </div>
  );
};

export default Payment;
