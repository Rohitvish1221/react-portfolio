import React from 'react';

function About() {
    return (
        <section id="about" className="min-h-screen pt-0 pb-8 bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4] text-gray-900 flex flex-col md:flex-row items-center gap-10">
            <div>
                    <h2 className="text-4xl text-center font-bold mb-10">About <span className="text-blue-600">Me</span></h2>
                <div className="col-span-2 px-20 justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Web Developer</h3>
                    <p className="text-lg mb-6">I enjoy building fast and user-friendly websites that offer a smooth experience for everyone. I'm passionate about exploring new technologies and staying updated with market trends. I'm excited to keep learning and contribute to meaningful projects with a forward-thinking team.</p>
                    <a href="#" className="inline-block px-6 py-2 text-center text-black bg-white font-bold rounded-full shadow-md hover:shadow-lg transition hover:bg-black">Read More</a>
                </div>
            </div>
        </section>
    );
}

export default About;