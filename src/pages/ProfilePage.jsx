import React from "react";
import { useState, useEffect } from "react";
import Feed from "../components/Feed";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials ";
import Spinner from "../components/Spinner"; // Import the Spinner component
import Banner from "../components/Banner";


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
                return <div><Feed /></div>;
            case 'About':
                return <div><About /></div>;
            case 'Projects':
                return <div><Projects /> </div>;
            case 'Testimonials':
                return <div><Testimonials /></div>;
            default:
                return <div><Feed /></div>;
        }
    };

    return (
        <div className="bg-gray-950 min-h-screen text-white">
            {isLoading && <Spinner />}
            <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
                {/* Banner */}
                <div className="relative">
                    <div className="bg-blue-100 w-full h-full rounded-lg overflow-hidden border rounded">
                       
                           <Banner/>
                       
                    </div>

                    {/* Profile Picture */}
                    <div className="absolute -bottom-24 left-1 transform translate-x-1/3">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white-900 bg-gray-300 ">
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
                        <h1 className="text-3xl font-bold mr-2">Aydon Cupido</h1>
                        <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="text-xs">✓</span>
                        </div>
                    </div>
                    <div className="text-gray-500 font-semibold mb-2 flex items-center ml-14">
                        @aydonC
                    </div>
                    <p className="text-lg mb-1 ml-14">Dream in logic, build with code, and turn ideas into reality.🚀</p>
                    <p className="text-gray-300 mb-4 ml-14">
                        Full Stack Engineer. Innovative Developer.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-start gap-4 text-lg text-gray-400 mb-8 ml-14">
                        <div className="flex items-center">
                            <span className="mr-1">🌐</span>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center cursor-grab" onClick={toggleModal}>
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
                    <div className="flex justify-center border-b border-gray-700 flex-wrap">
                        <button
                            onClick={() => handleTabClick('Feed')}
                            className={`px-6 py-2 font-medium hover:bg-gray-800 ${activeTab === 'Feed' ? 'border-b-2 border-purple-600 text-white' : 'text-gray-400'} sm:text-sm md:text-base lg:text-lg`}
                        >
                            Feed
                        </button>
                        <button
                            onClick={() => handleTabClick('About')}
                            className={`px-6 py-2 font-medium hover:bg-gray-800 ${activeTab === 'About' ? 'border-b-2 border-purple-600 text-white' : 'text-gray-400'} sm:text-sm md:text-base lg:text-lg`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleTabClick('Projects')}
                            className={`px-6 py-2 font-medium hover:bg-gray-800 ${activeTab === 'Projects' ? 'border-b-2 border-purple-600 text-white' : 'text-gray-400'} sm:text-sm md:text-base lg:text-lg`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleTabClick('Testimonials')}
                            className={`px-6 py-2 font-medium hover:bg-gray-800 ${activeTab === 'Testimonials' ? 'border-b-2 border-purple-600 text-white' : 'text-gray-400'} sm:text-sm md:text-base lg:text-lg`}
                        >
                            Testimonials
                        </button>
                    </div>


                    {/* Content */}
                    <div className="mt-4">
                        {renderContent()}
                    </div>


                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                            <div className="bg-[#1c1c1e] p-6 rounded-2xl shadow-lg w-96 text-center border border-purple-300">
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
                            </div>
                        </div>

                    )}

                </div>
            </div>
            <footer className="bg-gray-900 text-gray-400 py-2 text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Aydon Cupido. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProfilePage;
