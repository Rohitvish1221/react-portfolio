import React from "react";
import { motion } from "framer-motion";

function Skills() {
    const skills = [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="skills"
            className="min-h-screen bg-gradient-to-t from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] py-12 sm:py-20 px-4 sm:px-8 text-gray-900"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-20"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                My <span className="text-blue-700">Skills</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-white flex flex-col items-center justify-center h-28 w-28 sm:h-32 sm:w-32 p-4 rounded-2xl shadow-md transition-all duration-300"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { type: "spring", stiffness: 300 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            whileHover={{
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.6 },
                            }}
                        />
                        <p className="mt-3 text-sm sm:text-base font-medium text-gray-700">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
