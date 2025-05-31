import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Businesswoman from '../assets/Businesswoman.svg';
import ProfilePic from '../assets/profile.jpg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleToggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full bg-gradient-to-l from-blue-400 text-white fixed z-50">
            <div className="font-pixelify flex items-center justify-between px-4 py-3 md:px-12 relative">
                {/* Left Section - Mobile: Hamburger | Desktop: Profile + Name */}
                <div className="flex items-center">
                    {/* Hamburger - mobile only */}
                    <button
                        onClick={handleToggle}
                        className="md:hidden mr-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Profile image + name - desktop only */}
                    <div className="hidden md:flex items-center gap-2">
                        <img src={ProfilePic} alt="Profile" className="w-10 h-11 rounded-full" />
                        <h1 className="text-xl font-bold">Tashi Lamo</h1>
                    </div>
                </div>

                {/* Center Section - Desktop Nav Links */}
                <div className="hidden md:flex gap-10 text-xl font-semibold">
                    <Link to="/" className="hover:scale-110 transition" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="hover:scale-110 transition" onClick={closeMenu}>About</Link>
                    <Link to="/projects" className="hover:scale-110 transition" onClick={closeMenu}>Projects</Link>
                    <Link to="/contact" className="hover:scale-110 transition" onClick={closeMenu}>Contact</Link>
                </div>

                {/* Right Section - Admin Icon */}
                <div
                    className="relative group cursor-pointer"
                    onClick={() => navigate('/admin/login')}
                >
                    <img
                        src={Businesswoman}
                        alt="Admin"
                        className="w-8 h-8 hover:scale-110 transition"
                    />
                    {/* Tooltip (visible on hover) */}
                    <div className="hidden md:block absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                        Admin
                    </div>
                </div>
            </div>

            {/* Mobile Nav Links */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 bg-blue-500 text-lg space-y-3">
                    <Link to="/" className="block border-b border-blue-300 py-1" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="block border-b border-blue-300 py-1" onClick={closeMenu}>About</Link>
                    <Link to="/projects" className="block border-b border-blue-300 py-1" onClick={closeMenu}>Projects</Link>
                    <Link to="/contact" className="block border-b border-blue-300 py-1" onClick={closeMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;