// src/pages/About.jsx
import React from 'react';
import VantaNet from '../components/VantaNet.jsx';

function About() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20 z-10">
            <div className="absolute inset-0 z-0 opacity-40">
                <VantaNet />
            </div>
            <div className="relative max-w-4xl mx-auto space-y-8 z-10">
                <h1 className="text-4xl font-bold border-b-2 border-blue-500 w-max pb-2">About Me</h1>

                <p className="text-lg leading-relaxed tracking-wide">
                    Hello! I'm <span className="text-blue-400 font-semibold">Tashi Lamo</span>, a passionate full-stack developer focused on building interactive, fast, and scalable applications using modern technologies like <span className="font-medium text-blue-300">React</span>, <span className="font-medium text-blue-300">.NET</span>, and <span className="font-medium text-blue-300">Tailwind CSS</span>.
                </p>

                <p className="text-lg leading-relaxed tracking-wide">
                    I love solving real-world problems through code, and I'm always eager to learn new tools and technologies. Currently, I'm sharpening my skills in backend development, exploring cloud infrastructure, and working on building impactful projects.
                </p>

                <p className="text-lg leading-relaxed tracking-wide">
                    Outside of coding, I enjoy reading, drawing, playing guitar, learning japanese, travelling, and exploring visual design systems to improve the aesthetics and accessibility of my applications.
                </p>

                <p className="text-lg leading-relaxed tracking-wide">
                    I believe in continuous growth, sharing knowledge, and building meaningful digital experiences. Thanks for visiting my portfolio!
                </p>
            </div>
       </div>
    );
}

export default About;
