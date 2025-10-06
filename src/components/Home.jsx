import React, { useState, useEffect } from "react";
import {
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaGithub,
    FaCode,
} from "react-icons/fa";
import heroImg from "../assets/7.png";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

function Home() {
    const texts = [
        "Frontend Developer",
        "Full-Stack Developer",
        "Web Developer",
        "React Developer",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 4000);

        return () => clearTimeout(timer);
    }, [index]);

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="home"
            className="bg-gradient-to-t from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 text-black"
        >
            {/* Hero Image */}
            <motion.div
                className="flex-1 md:mt-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.img
                    src={heroImg}
                    alt="hero"
                    className="mt-25 mx-auto h-96"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="flex-1 space-y-4 md:ml-10 mt-8 md:mt-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.h3
                    className="text-2xl font-semibold"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Hi, Myself
                </motion.h3>

                <motion.h1
                    className="text-5xl font-bold"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Rohit Vishwakarma
                </motion.h1>

                <motion.h3
                    className="text-2xl font-semibold mb-4 flex"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    And I'm a{" "}
                    <span
                        key={index}
                        className="text-[#535bf2] flex font-mono text-2xl typing ml-2"
                    >
                        {texts[index]}
                    </span>
                </motion.h3>

                <motion.p
                    className="text-lg mb-2"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Welcome to my Web Developer Portfolio!
                </motion.p>

                <motion.p
                    className="text-lg mb-6"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    A skilled and creative Web Developer with a passion for creating
                    beautiful, responsive, and user-friendly websites.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    className="flex space-x-4 mb-6"
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {[FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCode].map(
                        (Icon, i) => (
                            <motion.a
                                key={i}
                                href={
                                    Icon === FaLinkedin
                                        ? "https://www.linkedin.com/in/rohit-vishwakarma001/"
                                        : Icon === FaGithub
                                            ? "https://github.com/Rohitvish1221"
                                            : Icon === FaTwitter
                                                ? "https://x.com/Rohit81910071"
                                                : Icon === FaInstagram
                                                    ? "https://www.instagram.com/its__rohitv"
                                                    : "https://codolio.com/profile/Rohit1221"
                                }
                                target="_blank"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-2xl hover:text-black"
                            >
                                <Icon />
                            </motion.a>
                        )
                    )}
                </motion.div>

                {/* Resume Button */}
                <motion.a
                    href={resume}
                    download="Rohit-Resume.pdf"
                    className="inline-block px-6 py-2 mt-7 bg-cyan-400 text-blue-900 font-bold rounded-full shadow-md hover:shadow-lg transition hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    Download CV
                </motion.a>
            </motion.div>
        </section>
    );
}

export default Home;
