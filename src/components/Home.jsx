import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaCode } from 'react-icons/fa';
import heroImg from '../assets/7.png';
import resume from '../assets/resume.pdf';
import { useState, useEffect } from 'react';

function Home() {

    const texts = [
        "Frontend Developer",
        "Full-Stack Developer",
        "Web Developer",
        "React Developer"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 4000); // Wait 4s before switching to next text

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section id="home" className="bg-gradient-to-t from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 text-black">
            <div className="flex-1  md:mt-0">
                <img src={heroImg} alt="hero" className="mt-25 mx-auto h-96 animate-bounce [animation-duration:3s] " />
            </div>

            <div className="flex-1">
                <h3 className="text-2xl font-semibold">Hi, Myself</h3>
                <h1 className="text-5xl font-bold">Rohit Vishwakarma</h1>
                <h3 className="text-2xl font-semibold mb-4">And I'm a <span key={index} className="text-[#535bf2] flex font-mono text-xl typing">{texts[index]}</span></h3>
                <p className="text-lg mb-2">Welcome to my Web Developer Portfolio!</p>
                <p className="text-lg mb-6">A skilled and creative Web Developer with a passion for creating beautiful, responsive and user-friendly websites.</p>
                <div className="flex space-x-4 mb-6">
                    <a href="https://www.linkedin.com/in/rohit-vishwakarma001/" target='_blank'><FaLinkedin className="text-2xl hover:text-black" /></a>
                    <a href="https://github.com/Rohitvish1221" target='_blank'><FaGithub className="text-2xl hover:text-black" /></a>
                    <a href="https://x.com/Rohit81910071" target='_blank'><FaTwitter className="text-2xl hover:text-black" /></a>
                    <a href="https://www.instagram.com/its__rohitv" target='_blank'><FaInstagram className="text-2xl hover:text-black" /></a>
                    <a href="https://codolio.com/profile/Rohit1221" target='_blank'><FaCode className="text-2xl hover:text-black " /></a> 
                </div>
                <a href={resume} download="Rohit-Resume.pdf" className="inline-block px-6 py-2 mt-7 bg-cyan-400 text-blue-900 font-bold rounded-full shadow-md hover:shadow-lg transition hover:text-black">Download CV</a>
            </div>
        </section>
    );
}

export default Home;
