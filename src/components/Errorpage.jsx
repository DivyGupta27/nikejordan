import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Errorpage = ({ errorCode = 404 }) => {
  const errorMessages = {
    404: {
      title: "Lost Your Stride?",
      message: "This page seems to have sprinted off. Let's get you back on track.",
      image: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/6c0d13d6-6de7-4e4c-986f-6756d4c8c0b3___f97cae0b3c7f7d4804a3a74d4d2c5e2.png"
    },
    500: {
      title: "Technical Foul!",
      message: "Our servers are warming up. Try again in a few minutes.",
      image: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9a0d7f32-4b0c-4c4e-8a34-af3a1d0f7a3a___0a7b9f0a3b3b3b3b3b3b3b3b3b3b3b3.png"
    }
  };

  useEffect(() => {
    document.title = `Error ${errorCode} | Nike`;
  }, [errorCode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-float">
          <img 
            src={errorMessages[errorCode].image}
            alt="Error illustration"
            className="w-full max-w-xl mx-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full mb-6 text-sm font-bold animate-fade-in">
            ERROR {errorCode}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
            {errorMessages[errorCode].title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            {errorMessages[errorCode].message}
          </p>

          <div className="space-y-4">
            <Link 
              to="/"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Return to Home Court
            </Link>
            
            <div className="mt-8">
              <p className="text-gray-500 mb-2">Still stuck? Try searching</p>
              <div className="flex justify-center lg:justify-start">
                <input 
                  type="text" 
                  placeholder="Search Nike.com"
                  className="px-6 py-3 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-black text-white px-6 py-3 rounded-r-full hover:bg-gray-900 transition-colors duration-300">
                  Search
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Contact Support
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Store Locator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;