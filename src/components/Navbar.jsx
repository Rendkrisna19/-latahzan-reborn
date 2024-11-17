import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo Hijau.png";
import Logo1 from "../images/Logo Orange.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fungsi untuk toggle menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk toggle dropdown Schedule
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar fixed w-full z-20 flex items-center justify-between px-4 py-4 bg-nav text-hover">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo Hijau" className="h-12 mr-3" />
        <img src={Logo1} alt="Logo Orange" className="h-12" />
      </div>

      {/* Menu untuk Desktop */}
      <div className="hidden md:flex space-x-6  hover:text-green-400">
        <Link to="/" className="navbar-link text-white  hover:text-green-400 ">Home</Link>
        <Link to="/Team" className="navbar-link text-white  hover:text-green-400">Team</Link>

        {/* Dropdown untuk Schedule */}
        <div className="relative">
          <button
            className="navbar-link text-white  flex items-center"
            onClick={toggleDropdown}
          >
            Schedule
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 z-10">
              <Link
                to="/game"
                className="block px-4 py-2 text-gray-700 hover:bg-green-200  hover:text-green-400"
                onClick={() => setIsDropdownOpen(false)}
              >
                Game
              </Link>
              <Link
                to="/Training"
                className="block px-4 py-2 text-gray-700 hover:bg-green-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Training
              </Link>
            </div>
          )}
        </div>

        <Link to="/Media" className="navbar-link text-white  hover:text-green-400">Media</Link>
        <Link to="/Corp" className="navbar-link text-white  hover:text-green-400">Corp</Link>
        <Link to="/Membership" className="navbar-link text-white  hover:text-green-400">Membership</Link>
        <Link to="/Contact Us" className="navbar-link text-white  hover:text-green-400">Contact Us</Link>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none  hover:text-green-400"
        onClick={toggleMenu}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Full-Screen Slide Menu untuk Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-green-800 p-8 transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-3xl mb-4 focus:outline-none"
          onClick={toggleMenu}
        >
          ✖
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <Link
            to="/"
            className="block text-2xl text-white hover:text-green-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/Team"
            className="block text-2xl text-white hover:text-green-400"
            onClick={toggleMenu}
          >
            Team
          </Link>

          {/* Dropdown Menu di Mobile */}
          <button
            className="block text-2xl text-white flex items-center hover:text-green-400"
            onClick={toggleDropdown}
          >
            Schedule
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="flex flex-col items-center">
              <Link
                to="/game"
                className="block text-2xl text-green-200 hover:text-green-400"
                onClick={toggleMenu}
              >
                Game
              </Link>
              <Link
                to="/Training"
                className="block text-2xl text-green-200 hover:text-green-400"
                onClick={toggleMenu}
              >
                Training
              </Link>
            </div>
          )}

          <Link to="/Media" className="block text-2xl text-white hover:text-green-400" onClick={toggleMenu}>Media</Link>
          <Link to="/Corp" className="block text-2xl text-white hover:text-green-400" onClick={toggleMenu}>Corp</Link>
          <Link to="/Membership" className="block text-2xl text-white hover:text-green-400" onClick={toggleMenu}>Membership</Link>
          <Link to="/Contact Us" className="block text-2xl text-white hover:text-green-400" onClick={toggleMenu}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
