import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 shadow-lg bg-white sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">IELTS Pro</span>
        </h1>
      </div>
      
      <div className="space-x-8 hidden md:flex text-gray-700 font-medium">
        <a href="#features" className="hover:text-blue-600 transition-colors duration-300 relative group">
          Features
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-300 relative group">
          Testimonials
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#contact" className="hover:text-blue-600 transition-colors duration-300 relative group">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
      
      <button 
        className="md:hidden p-2 rounded-full hover:bg-blue-50 transition-colors duration-300 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
