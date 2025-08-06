import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="fixed top-0 left-0 w-full px-8 py-4 bg-black  text-white flex justify-between z-50">
            <a href="#home" className="text-2xl mr-[200px] text-cyan-400 font-bold">Portfolio</a>
            <FaBars className="text-3xl cursor-pointer md:hidden" onClick={toggleNavbar} />
            <nav className={`md:flex md:items-center absolute md:static top-full left-0 w-full justify-end bg-black md:bg-transparent px-8 py-4 md:p-0 transition-all duration-300 ease-in ${isActive ? 'block' : 'hidden'}`}>
                <a href="#home" className="block px-4 py-2 hover:text-cyan-400">Home</a>
                <a href="#about" className="block px-4 py-2 hover:text-cyan-400">About</a>
                <a href="#skills" className="block px-4 py-2 hover:text-cyan-400">Skills</a>
                <a href="#portfolio" className="block px-4 py-2 hover:text-cyan-400">My Work</a>
                <a href="#contact" className="block px-4 py-2 hover:text-cyan-400">Contact</a>
            </nav>
        </header>
    );
}

export default Header;