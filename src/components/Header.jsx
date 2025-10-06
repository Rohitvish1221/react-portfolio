import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.header
            className="fixed top-0 left-0 w-full px-8 py-4 bg-black text-white flex justify-between items-center z-50 shadow-md"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Logo */}
            <motion.a
                href="#home"
                className="text-2xl text-cyan-400 font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Portfolio
            </motion.a>

            {/* Hamburger Icon */}
            <motion.div
                className="text-3xl cursor-pointer md:hidden"
                onClick={toggleNavbar}
                whileTap={{ scale: 0.9, rotate: 90 }}
                transition={{ duration: 0.3 }}
            >
                <FaBars />
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav
                className="hidden md:flex md:items-center space-x-6"
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                {["Home", "About", "Skills", "My Work", "Contact"].map((link, index) => (
                    <motion.a
                        key={index}
                        href={`#${link.toLowerCase().replace(" ", "")}`}
                        className="hover:text-cyan-400 transition"
                        variants={linkVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {link}
                    </motion.a>
                ))}
            </motion.nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isActive && (
                    <motion.nav
                        className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 md:hidden"
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                    >
                        {["Home", "About", "Skills", "My Work", "Contact"].map((link, index) => (
                            <motion.a
                                key={index}
                                href={`#${link.toLowerCase().replace(" ", "")}`}
                                className="block px-4 py-2 text-white hover:text-cyan-400"
                                variants={linkVariants}
                                onClick={() => setIsActive(false)}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
