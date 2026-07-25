import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Feed from "../components/Feed";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials ";
import Spinner from "../components/Spinner"; // Import the Spinner component
import Banner from "../components/Banner";
import TypewriterText from "../components/TypewriterText";
import AuroraBackground from "../components/AuroraBackground";
import LocalTime from "../components/LocalTime";
import { LuCheck, LuLink2, LuCake, LuCalendarDays, LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const TABS = ["Feed", "About", "Projects", "Testimonials"];


const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('Feed');
    const [isLoading, setIsLoading] = useState(true); // State to manage loading state

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Simulate page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after a delay
        }, 2000); // Adjust the delay time as per the loading duration

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'Feed':
                return <Feed />;
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Testimonials':
                return <Testimonials />;
            default:
                return <Feed />;
        }
    };

    return (
        <div className="relative bg-gray-950 min-h-screen text-white z-20 overflow-hidden" >
            {/* Animated aurora background (21st.dev, recoloured) */}
            <AuroraBackground />
            {/* Background Logo */}
            <img
                src="/logoMain.png"
                alt="Background Logo"
                className="fixed top-[65%] right-0 w-[600px] opacity-20 -translate-y-1/2 z-0 pointer-events-none select-none"
            />
            {isLoading && <Spinner />}
            <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
                {/* Banner */}
                <div className="relative">
                    <div className="bg-blue-100 w-full h-full rounded-lg overflow-hidden border rounded">

                        <Banner />

                    </div>

                    {/* Profile Picture */}
                    <div className="absolute -bottom-24 left-1 transform translate-x-1/3 z-40">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white bg-gray-300 ">
                            <img
                                src="/aydon.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <br />
                {/* Profile Info */}
                <div className="mt-20 text-left " >
                    <div className="flex justify-left items-center mb-2 ml-14 ">
                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mr-2 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-3xl font-bold text-transparent"
                        >
                            Aydon Cupido
                        </motion.h1>
                        <motion.div
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 18, delay: 0.3 }}
                            className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center shadow-lg shadow-purple-500/40"
                        >
                            <LuCheck className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
                        </motion.div>
                    </div>
                    <div className="text-gray-500 font-semibold mb-2 flex items-center ml-14">
                        @aydonC
                        <br />
                        Founder @ InnovAyd

                    </div>
                    <p className="text-lg mb-1 ml-14">Dream in logic, build with code, and turn ideas into reality.🚀</p>
                    <p className="text-gray-300 mb-4 ml-14 h-7">
                        <TypewriterText
                            words={[
                                "Full Stack Engineer 💻",
                                "Innovative Developer 🚀",
                                "Problem Solver 🧩",
                                "React & C# Specialist ⚛️",
                            ]}
                            className="text-purple-300 font-semibold font-code"
                        />
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-base text-gray-400 mb-8 ml-14">
                        {/* Available-for-work status with a live pulsing dot */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-300">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                            </span>
                            Available for work
                        </span>
                        <button
                            type="button"
                            className="flex items-center transition-colors hover:text-purple-400 focus:outline-none focus:text-purple-400"
                            onClick={toggleModal}
                        >
                            <LuLink2 className="mr-1.5 h-4 w-4 text-purple-400" />
                            <span className="text-purple-400">/links</span>
                        </button>
                        <span className="flex items-center">
                            <LuCake className="mr-1.5 h-4 w-4 text-purple-400" />
                            August 18th
                        </span>
                        <span className="flex items-center">
                            <LuCalendarDays className="mr-1.5 h-4 w-4 text-purple-400" />
                            Joined March 2025
                        </span>
                        <LocalTime />
                    </div>


                    {/* Navigation — segmented pill control with a sliding active pill */}
                    <div className="sticky top-3 z-30 mb-2 flex justify-center">
                        <div className="flex items-center gap-1 rounded-full border border-gray-800 bg-gray-900/70 p-1 shadow-lg shadow-black/30 backdrop-blur">
                            {TABS.map((tab) => (
                                <motion.button
                                    key={tab}
                                    onClick={() => handleTabClick(tab)}
                                    whileTap={{ scale: 0.94 }}
                                    className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:text-base ${
                                        activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                                    }`}
                                >
                                    {activeTab === tab && (
                                        <motion.span
                                            layoutId="tab-pill"
                                            className="absolute inset-0 rounded-full bg-purple-600 shadow-md shadow-purple-600/40"
                                            transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>


                    {/* Content — keyed remount plays the enter animation on each
                        tab change. (AnimatePresence mode="wait" deadlocks here, so
                        we rely on the key change instead.) */}
                    <div className="mt-4">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            {renderContent()}
                        </motion.div>
                    </div>


                    {/* Modal — conditional render with an enter animation. We avoid
                        AnimatePresence exit here because framer-motion's exit
                        animations deadlock under React 19 StrictMode in this project. */}
                    {isModalOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            onClick={toggleModal}
                        >
                            <motion.div
                                className="bg-[#1c1c1e] p-6 rounded-2xl shadow-lg w-96 text-center border border-purple-300"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h2 className="text-2xl text-gray-300 font-semibold mb-4">Click To View</h2>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="https://github.com/AydonC"
                                            className="flex items-center justify-center gap-2 text-lg text-purple-400 font-bold hover:underline hover:text-purple-300 transition"
                                            target="_blank" rel="noopener noreferrer">
                                            <SiGithub className="h-5 w-5" /> My GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/aydon-jon-cupido-22b513286/"
                                            className="flex items-center justify-center gap-2 text-lg text-purple-400 font-bold hover:underline hover:text-purple-300 transition"
                                            target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="h-5 w-5" /> My LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:cupido.aydon@gmail.com"
                                            className="flex items-center justify-center gap-2 text-lg text-purple-400 font-bold hover:underline hover:text-purple-300 transition"
                                            target="_blank" rel="noopener noreferrer">
                                            <LuMail className="h-5 w-5" /> Send Me An Email
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    className="mt-6 bg-gray-600 hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition shadow-md"
                                    onClick={toggleModal}>
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}

                </div>
            </div>
            <footer className="bg-gray-900 text-gray-400 py-2 text-center mt-8">
                <p>&copy; {new Date().getFullYear()} InnovAyd. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProfilePage;
