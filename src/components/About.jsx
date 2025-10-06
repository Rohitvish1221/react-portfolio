import React from "react";
import { motion } from "framer-motion";

function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-4 sm:px-8 md:px-12 py-10 md:py-20 bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4] text-gray-900"
        >
            {/* Text Section */}
            <motion.div
                className="md:w-1/2 w-full text-center md:text-left space-y-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About <span className="text-blue-700">Me</span>
                </motion.h2>

                <motion.h3
                    className="text-xl sm:text-2xl font-semibold"
                    variants={fadeUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Web Developer
                </motion.h3>

                <motion.p
                    className="text-base sm:text-lg leading-relaxed text-gray-800 max-w-lg mx-auto md:mx-0"
                    variants={fadeUp}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    I enjoy building fast and user-friendly websites that provide smooth,
                    engaging experiences. I love exploring modern web technologies,
                    staying updated with trends, and contributing to meaningful projects
                    that make a difference.
                </motion.p>

                <motion.a
                    href="#"
                    className="inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-bold text-black bg-white rounded-full shadow-md hover:shadow-lg hover:bg-black hover:text-white transition duration-300"
                    variants={fadeUp}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Read More
                </motion.a>
            </motion.div>
        </section>
    );
}

export default About;
