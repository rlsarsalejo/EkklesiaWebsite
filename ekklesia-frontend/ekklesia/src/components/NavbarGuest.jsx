import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export default function NavbarGuest() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-semibold">
        <Link to="/">Ekklesia Website</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="text-white md:hidden"
        onClick={toggleNavbar}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
      <Link 
        to="/" 
        className="block py-2 px-4 text-white bg-gray-700 hover:bg-gray-600"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="block py-2 px-4 text-white bg-gray-700 hover:bg-gray-600"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className="block py-2 px-4 text-white bg-gray-700 hover:bg-gray-600"
        onClick={() => setIsOpen(false)}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        className="block py-2 px-4 text-white bg-gray-700 hover:bg-gray-600"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
    </div>
  </nav>
  )
}
