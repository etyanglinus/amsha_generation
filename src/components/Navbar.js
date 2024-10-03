"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-white shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h2 className="font-extrabold text-2xl text-indigo-600">Amsha Generation</h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/about" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              Features
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/partners" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              Our Partners
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-indigo-600 text-gray-700 transition duration-300">Login</Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-indigo-600 text-gray-700 transition duration-300">Signup</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 hover:text-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {/* Mobile Links */}
      <ul className={`absolute left-0 top-16 w-full bg-white md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition duration-300 ease-in-out`}>
        <li className="border-b border-gray-200">
          <Link href="/about" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            About Us
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link href="/features" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            Features
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link href="/blog" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            Blog
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link href="/contact" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            Contact
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link href="/partners" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            Our Partners
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link href="/login" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            Login
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link href="/signup" className="block py-4 px-6 text-gray-700 hover:text-indigo-600 transition duration-300">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
