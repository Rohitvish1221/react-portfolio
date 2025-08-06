import React from 'react';

function Skills() {
    return (
        <section id="skills" className="min-h-screen pt-30 bg-gradient-to-t from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] py-20 px-8 text-gray-900">
            <h2 className="text-4xl font-bold text-center mb-20">
                My <span className="text-blue-600">Skills</span>
            </h2>

            <div className=" px-8 w-[100%] mx-auto my-0 flex flex-wrap gap-x-20 justify-center ">
                <div className="bg-white h-30 w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className=" " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className=" " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                </div>

                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                </div>

                <div className="bg-white h-30 w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className=" " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                </div>
                <div className="bg-white h-30  w-32 p-6 mb-20 rounded-2xl shadow-lg hover:scale-105 transition">
                    <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </div>

            </div>
        </section>
    );
}

export default Skills;