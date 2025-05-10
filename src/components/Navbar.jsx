import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('logout successfully',{
      position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
     })
    navigate('/login');
  };

  const isLoggedIn = localStorage.getItem('token');

  return (
    <header className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="logo" className="h-8 w-8" />
            </NavLink>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            {['/', '/mens', '/womens', '/kids'].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`
                }
              >
                {['Latest collection', 'Mens', 'Womens', 'Kids'][i]}
              </NavLink>
            ))}
          </nav>

          <div title='cart' className="flex items-center gap-4">
            <NavLink className="h-4 w-4" to="/cart">
              <img src="https://www.svgrepo.com/show/529455/cart-large-minimalistic.svg"  alt="Cart" />
            </NavLink>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-3xl bg-black cursor-pointer px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Logout
              </button>
            ) : (
              <div className="hidden sm:flex gap-2">
                <NavLink
                  to="/login"
                  className="rounded-3xl  bg-white px-5 py-2 text-sm font-medium text-black"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="rounded-3xl bg-black px-5 py-2 text-sm font-medium text-white"
                >
                  Sign Up
                </NavLink>
              </div>
            )}

            {/* Mobile Hamburger */}
            <div className="block md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {['/', '/mens', '/womens', '/kids'].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                {['Latest collection', 'Mens', 'Womens', 'Kids'][i]}
              </NavLink>
            ))}

            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 hidden py-2 text-sm font-medium text-gray-700 hover:text-black"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
      <ToastContainer/>
    </header>
  );
};

export default Navbar;
