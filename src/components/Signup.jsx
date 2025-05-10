import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // ✅ react-router-dom v6 hook for navigation

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData; // ✅ safely destructured

    const userData = { username, email, password };

    try {
      const response = await fetch('https://nikejordan.onrender.com/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // ✅ fixed header typo
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message, {
          position: "top-center",
          autoClose: 4000,
          theme: "colored",
        });

        setFormData({ username: "", email: "", password: "" }); // ✅ reset form
        navigate('/login'); // ✅ redirect to login
      } else {
        toast.error(data.message || "Signup failed", {
          position: "top-center",
          autoClose: 4000,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-[20px] rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-bold mb-2 text-center">Sign Up</h2>
        <p className='flex justify-center text-gray-600 text-xs mb-4'>Sign up to create an account</p>

        <label htmlFor="user" className="block mb-2 font-medium text-gray-800">Username</label>
        <input
          id="user"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          required
        />

        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          required
        />

        <label htmlFor="pass" className="block mb-2 text-sm font-medium text-gray-800">Password</label>
        <input
          id="pass"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 border border-gray-300 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
