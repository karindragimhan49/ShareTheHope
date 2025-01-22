import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Define the state for dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown open/close state
  };

  return (
    <nav className="bg-blue-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white text-2xl font-semibold tracking-wide"
            >
              ShareTheHope
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="#about"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="#how-it-works"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              How It Works
            </Link>
            <Link
              to="#donate"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDropdown}
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>


        
        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden ${isOpen ? 'block animate-slide-in' : 'hidden'}`}
        >
          <div className="space-y-2 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="#about"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="#how-it-works"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 text-base font-medium"
            >
              How It Works
            </Link>
            <Link
              to="#donate"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2 text-base font-medium"
            >
              Donate
            </Link>
          </div>
          <div className="border-t border-blue-500 px-2 py-3">
            <Link
              to="/login"
              className="block text-white bg-blue-700 hover:bg-blue-800 rounded-md px-3 py-2 text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-white bg-blue-500 hover:bg-blue-600 rounded-md px-3 py-2 text-base font-medium mt-2"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;