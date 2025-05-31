import React from 'react';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';
import bg_home from '../assets/bg_home.png';
import VantaNet from '../components/VantaNet.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen pt-20 px-4 sm:px-6 md:px-10 flex items-center overflow-hidden">
            {/* Vanta Net Background */}
            <div className="absolute inset-0 z-0">
                <VantaNet />
            </div>

            {/* Background image with light overlay */}
            <div
                className="absolute inset-0 z-10 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${bg_home})` }}
            ></div>

            {/* Foreground content */}
            <div
                style={{ wordSpacing: '0.6rem', letterSpacing: '0.05rem' }}
                className="relative z-20 w-full max-w-2xl space-y-3 text-white sm:px-6 px-4 md:px-12 m-4 sm:m-6 md:m-9 font-pixelify animate-fadeIn"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    TASHI LAMO
                </h1>
                <p className="text-xl sm:text-2xl">A .NET DEVELOPER</p>
                <p className="text-base sm:text-lg md:text-xl py-2">
                    I love creating efficient software solutions
                </p>
                <p className="text-sm sm:text-base md:text-lg py-2">
                    Building my portfolio as I learn...
                </p>

                <button
                    onClick={() => navigate('/projects')}
                    className="tracking-widest bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    View My Work
                </button>

                {/* Social Icons */}
                <div className="flex gap-4 sm:gap-5 pt-6">
                    <a href="https://github.com/LamoTashi" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://linkedin.com/in/tashi-lamo-79922322a/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition duration-300" />
                    </a>
                    <a href="mailto:tashilamo2005@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={mail} alt="Mail" className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;