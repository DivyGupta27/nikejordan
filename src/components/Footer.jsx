import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nike</h2>
          <h3 className='italic text-xl'>Created and Designed by <span className='text-white bg-black pl-1 pr-1 rounded'>Divy Gupta</span></h3>
          <p className="text-sm text-gray-400">
            Just Do It. Premium sneakers for sport and streetwear.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/collection" className="hover:text-white">Collection</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Nike Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
