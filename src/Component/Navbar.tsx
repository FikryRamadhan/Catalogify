import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md min-md:px-20 px-5">
      {/* Desktop and Mobile Layout */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo (visible on all screens) */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-600">CATALOGIFY</h1>
          </div>

          {/* Middle Section - Navigation Links (visible only on lg screens) */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-10">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">About</a>
            </div>
          </div>

          {/* Right Section - Icons (visible on all screens) */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              {/* Shopping Cart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 hidden md:block">
              {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* Hamburger Menu Button (visible only on smaller screens) */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                /* X Icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Menu Icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

     
      {/* Mobile Menu Modal (fixed on right side) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black opacity-10 z-40 lg:hidden"
            onClick={toggleMenu}
          ></div>
          
          {/* Modal Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="p-5">
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-gray-900 py-2 font-medium border-b border-gray-200">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 py-2 font-medium border-b border-gray-200">Products</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 py-2 font-medium border-b border-gray-200">Categories</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 py-2 font-medium border-b border-gray-200">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 py-2 font-medium border-b border-gray-200">Contact</a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}