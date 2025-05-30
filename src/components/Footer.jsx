// src/components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer className="w-full fixed bottom-0 z-50 bg-black text-white">
            <div className="flex justify-between items-center px-8 py-3 text-sm">
                <p>&copy; {new Date().getFullYear()} Tashi Lamo. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="/privacy" className="hover:text-gray-300 transition duration-300">Privacy</a>
                    <a href="/terms" className="hover:text-gray-300 transition duration-300">Terms</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
