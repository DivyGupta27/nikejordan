import React, { useContext, useEffect, useState } from 'react'
import shoedata from '../contextapi/shoedata'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Cart = () => {
  const navigate = useNavigate()
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('https://nikejordan.onrender.com/user/cart/getcart', {
          method: "GET",
          headers: {
            'auth-token': localStorage.getItem('token'),
          },
        })
        const data = await response.json()
        console.log(data)

        if (data.success) {
          setCartData(data.cart)
        } else {
          toast.error(data.message || 'Failed to load cart')
        }
      } catch (err) {
        console.error(err)
        toast.error('Error fetching cart',{
          position:'top-center'
        })
      }
    }

    fetchCart()
  }, [])

  const getTotal = () => {
    return cartData.reduce((total, item) => total + item.price, 0)
  }

  const checkout = () => {
    if (cartData.length === 0) {
      toast.error('Cart is empty', { position: 'top-center' })
    } else {
      navigate('/payment')
    }
  }

  const removeFromCart = async (id) => {
    try {
      const response = await fetch(`https://nikejordan.onrender.com/user/cart/remove${id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      })
  
      const data = await response.json()
      if (data.success) {
        // Update local state to reflect removed item
        setCartData(prev => prev.filter(item => item._id !== id))
        toast.success('Item removed from cart',
          {position:"top-center"}
        )
      } else {
        toast.error(data.message || 'Failed to remove item')
      }
    } catch (err) {
      console.error(err)
      toast.error('Error removing item from cart',{
        position:"top-center"
      })
    }
  }




  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartData.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartData.map((item, id) => (
            <div key={id} className="flex items-center gap-6 bg-white shadow-md p-4 rounded-xl">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category} • {item.color}</p>
                <p className="text-sm text-gray-600">₹ {item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-xl font-bold">Total: ₹ {getTotal()}</div>
        </div>
      )}

      <div className="flex justify-end">
        <button onClick={checkout} className="capitalize flex mt-4 items-center justify-center w-[100px] h-[40px] rounded-xl cursor-pointer bg-black text-white">
          Check out
        </button>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Cart
