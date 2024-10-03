"use client";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 w-full bg-white shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/icons/logo.png" alt="Amsha Generation Logo" className="h-8 w-auto" />
        </div>


        {/* Desktop Links only (visible on medium and larger screens) */}
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
            <Link href="/login" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-indigo-600 text-gray-700 transition duration-300">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
