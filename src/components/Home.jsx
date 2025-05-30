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
        <div className="relative min-h-screen pt-18 px-9 flex items-center overflow-hidden">
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
                className="relative z-20 max-w-2xl space-y-2 text-white px-12 m-9 font-pixelify animate-fadeIn"
            >
                <h1 className="text-7xl font-bold animate-fadeIn">
                    TASHI LAMO
                </h1>
                <p className="text-2xl">A .NET DEVELOPER</p>
                <p className="text-xl py-3">I love creating efficient software solutions</p>
                <p className="text-lg py-3">Building my portfolio as I learn...</p>

                <button
                    onClick={() => navigate('/projects')}
                    style={{ wordSpacing: '0.5rem' }}
                    className="tracking-widest w-max bg-blue-800 text-white px-8 py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    View My Work
                </button>

                {/* Social Icons */}
                <div className="flex gap-5 p-7">
                    <a href="https://github.com/LamoTashi" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition duration-300" />
                    </a>
                    <a href="mailto:tashilamo2005@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={mail} alt="Mail" className="w-8 h-8 hover:scale-110 transition duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;