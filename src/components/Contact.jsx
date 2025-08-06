import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaAngleUp } from "react-icons/fa";

function Contact() {
    const form = useRef();
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message.");
                    console.error(error.text);
                }
            );
    };

    return (
        <section
            id="contact"
            className=" bg-gradient-to-t from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] px-8 pt-25 text-gray-900"
        >
            <h2 className="text-4xl font-bold text-center mb-10">
                Contact <span className="text-blue-600">Me</span>
            </h2>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-3xl mx-auto space-y-6"
            >
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Full Name"
                        className="w-full p-3 border rounded"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        name="user_phone"
                        placeholder="Mobile Number"
                        className="w-full p-3 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Email Subject"
                        className="w-full p-3 border rounded"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    className="w-full p-3 border rounded"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>

            <footer className=" px-8 pt-26 pb-10 flex text-center items-center justify-between text-gray-800">
                <p className="font-bold w-[100%] flex justify-center">
                    &copy; 2025 by @RohitVishwakarma | All Rights Reserved.
                </p>
                <a
                    href="#home"
                    className="inline-block bg-black p-2 rounded text-white hover:bg-blue-700"
                >
                    <FaAngleUp className="text-xl" />
                </a>
            </footer>
        </section>
    );
}

export default Contact;
