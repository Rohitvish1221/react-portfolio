import React from "react";
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
      title: "E-Commerce App(NextBuy)",
      desc: "A responsive E-Commerce Web App with product browsing, shopping cart, and user authentication, built using React, Node.js, and Express.",
      link: "https://nextbuy-bzi7.onrender.com/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen mx-auto pt-40 bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4] px-8 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-black">Latest </span>
        <span className="text-blue-600">Projects</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div>
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent flex flex-col justify-end p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-white mx-auto text-sm">{project.desc}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-40 mt-4 px-4 py-2 bg-black text-center items-center text-white rounded hover:border-white transition"
              >
                🔗 Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
