"use client";
import React, { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white font-bold text-red-900 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-lg font-bold italic">Historical Monuments</div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col justify-center space-y-1"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span
              className={`block w-8 h-1 bg-red-700 rounded transform transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-red-700 rounded transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-red-700 rounded transform transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-4 space-y-4 md:space-y-0 text-blue-900 md:items-center`}
          >
            <li>
              <Link href="/" className="hover:underline font-serif">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:underline font-serif">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline font-serif">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
