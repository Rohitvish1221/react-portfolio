import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function Portfolio() {
  const projects = [
    {
      img: img3,
      title: "MoviesHub App",
      desc: "A responsive React Web Application that allows users to search for movies, view details, and manage a list of favorite movies using React Router and the OMDb API.",
      link: "https://movies-hub-app.vercel.app/",
    },
    {
      img: img2,
      title: "Personal Portfolio",
      desc: "A modern Portfolio Website built using React and Tailwind CSS to showcase my skills, projects, and resume. Includes animated typing text, responsive design, and smooth navigation.",
      link: "#",
    },
    {
      img: img1,
      title: "E-Commerce App (NextBuy)",
      desc: "A responsive E-Commerce Web App with product browsing, shopping cart, and user authentication, built using React, Node.js, and Express.",
      link: "https://nextbuy-bzi7.onrender.com/",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen mx-auto pt-40 bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4] px-6 sm:px-8 py-16 sm:py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-black">Latest </span>
        <span className="text-blue-600">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image Card */}
            <motion.div
              className="relative group overflow-hidden rounded-lg shadow-lg w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-white text-sm">{project.desc}</p>
              </div>
            </motion.div>

            {/* Visit Button */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              🔗 Visit Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
