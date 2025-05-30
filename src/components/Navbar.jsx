import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Businesswoman from '../assets/Businesswoman.svg';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="w-full bg-gradient-to-l from-blue-400 text-white fixed z-50">
            <div className="font-pixelify flex justify-between items-center px-12 py-2">
                {/* Left Side - Nav Links */}
                <div className="flex gap-10 text-xl font-semibold">
                    <Link to="/" className="hover:scale-110 transition duration-300">Home</Link>
                    <Link to="/about" className="hover:scale-110 transition duration-300">About</Link>
                    <Link to="/projects" className="hover:scale-110 transition duration-300">Projects</Link>
                    <Link to="/contact" className="hover:scale-110 transition duration-300">Contact</Link>
                </div>

                {/* Right Side - Admin Icon */}
                <div
                    className="cursor-pointer hover:scale-110 transition duration-300"
                    onClick={() => navigate('/admin/login')}
                >
                    <img src={Businesswoman} alt="Admin" className="w-8 h-8" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
