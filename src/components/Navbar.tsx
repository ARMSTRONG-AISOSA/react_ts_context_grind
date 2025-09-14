import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { menuLinks, type MenuLink } from '../data/menuLinks';

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 border-solid border-b-1 border-gray-500 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          Context
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {menuLinks.map((menuLink: MenuLink) => (
            <Link
              key={menuLink.id}
              to={menuLink.path}
              className="text-white hover:text-gray-200">
              {menuLink.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown (absolute) */}
      <div 
      className={`absolute left-0 right-0 bg-gray-800 shadow-md md:hidden overflow-hidden transition-all duration-600 ease-in-out ${isOpen ? "max-h-60" : "max-h-0"}`}
      >
        <div className="space-y-2 text-white px-6 py-4">
          {menuLinks.map((menuLink: MenuLink) => (
            <Link
              key={menuLink.id}
              to={menuLink.path}
              className="block px-3 py-2 rounded hover:bg-blue-500"
            >
              {menuLink.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar