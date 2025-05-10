import React, { useContext } from 'react';
import shoedata from '../contextapi/shoedata';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShoeCard = ({ name, category, price, color, gender, image, inStock}) => {
  const navigate = useNavigate();

  const handleAdd = async () => {
  if(!localStorage.getItem("token")){
      toast.error('login to add items in the cart',{
        position:'top-center'
      })
      return
  }
    

    try {
      const response = await fetch('http://localhost:8000/user/cart/items', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ name, category, price, color, gender, image }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message, {
          position: "top-center",
          autoClose: 4000,
          theme: "colored",
        });
      } else {
        toast.error(data.message, {
          position: "top-center",
          autoClose: 4000,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  const handleBuy = () => {
    // addToCart({ name, category, price, color, gender, image, inStock, ...rest });
    handleAdd()
    navigate('/cart');
  };

  return (
    <div className="bg-white w-[350px] h-[500px] flex flex-col shadow-md rounded-2xl overflow-hidden p-6 hover:shadow-2xl transition duration-300">
      <img src={image} alt={name} className="w-full h-56 object-contain mb-4" />
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-600">{category} • {color}</p>
      <p className="text-sm text-gray-600 mb-2">For: {gender}</p>
      <p className="text-lg font-bold text-black">₹ {price}</p>
      <p className={`text-sm font-medium ${inStock ? 'text-green-600' : 'text-red-600'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <div className='flex gap-2 mt-auto'>
        <button
          onClick={handleAdd}
          className="mt-4 w-full bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuy}
          className="mt-4 w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ShoeCard;
