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
            {/* Background Logo */}
            <img
                src="/logoMain.png"
                alt="Background Logo"
                className="fixed top-[65%] right-0 w-[600px] opacity-20 -translate-y-1/2 z-0 pointer-events-none select-none"
            />
            <div className="relative sm:fixed top-4 left-4 z-50 flex items-center">
                <img
                    src="/logoMain.png"
                    alt="Logo"
                    className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
                />
            </div>




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
                            <span className="text-xs">✓</span>
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
                            className="text-purple-300 font-semibold"
                        />
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-start gap-4 text-lg text-gray-400 mb-8 ml-14">
                        <div className="flex items-center">
                            <span className="mr-1">🌐</span>
                            <span>Available</span>
                        </div>
                        <div
                            className="flex items-center cursor-pointer hover:text-purple-400 transition-colors"
                            onClick={toggleModal}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleModal()}
                            role="button"
                            tabIndex={0}
                        >
                            <span className="mr-1">🔗</span>
                            <span className="text-purple-500">/links</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-1">📅</span>
                            <span>August 18th</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-1">📂</span>
                            <span>Joined March 2025</span>
                        </div>
                    </div>


                    {/* Navigation */}
                    <div className="sticky top-0 z-30 flex justify-center border-b border-gray-700 flex-wrap bg-gray-950/80 backdrop-blur">
                        {TABS.map((tab) => (
                            <motion.button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                whileTap={{ scale: 0.92 }}
                                className={`relative px-6 py-2 font-medium transition-colors hover:text-white sm:text-sm md:text-base lg:text-lg ${
                                    activeTab === tab ? 'text-white' : 'text-gray-400'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.span
                                        layoutId="tab-underline"
                                        className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-purple-500"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
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
                                            className="text-lg text-purple-600 font-bold hover:underline hover:text-purple-300 transition"
                                            target="_blank" rel="noopener noreferrer">
                                            My GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/aydon-jon-cupido-22b513286/"
                                            className="text-lg text-purple-600 font-bold hover:underline hover:text-purple-300 transition"
                                            target="_blank" rel="noopener noreferrer">
                                            My LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:cupido.aydon@gmail.com"
                                            className="text-lg text-purple-600 font-bold hover:underline hover:text-purple-300 transition"
                                            target="_blank" rel="noopener noreferrer">
                                            Send Me An Email
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
