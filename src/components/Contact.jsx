import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
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

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-gradient-to-t from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] px-8 py-16 text-gray-900"
        >
            {/* Heading */}
            <motion.h2
                className="text-4xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Contact <span className="text-blue-600">Me</span>
            </motion.h2>

            {/* Contact Form */}
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-3xl mx-auto space-y-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex flex-col md:flex-row gap-4"
                    variants={fadeUp}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
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
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row gap-4"
                    variants={fadeUp}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
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
                </motion.div>

                <motion.textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    className="w-full p-3 border rounded"
                    required
                    variants={fadeUp}
                    transition={{ delay: 0.6, duration: 0.8 }}
                ></motion.textarea>

                <motion.button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeUp}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Send Message
                </motion.button>
            </motion.form>

            {/* Footer */}
            <motion.footer
                className="px-8 pt-20 pb-10 flex text-center items-center justify-between text-gray-800"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p className="font-bold w-[100%] flex justify-center">
                    &copy; 2025 by @RohitVishwakarma | All Rights Reserved.
                </p>
                <motion.a
                    href="#home"
                    className="inline-block bg-black p-2 rounded text-white hover:bg-blue-700"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaAngleUp className="text-xl" />
                </motion.a>
            </motion.footer>
        </section>
    );
}

export default Contact;
