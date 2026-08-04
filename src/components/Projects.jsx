import React from 'react';
import { motion } from 'framer-motion';
import { LuPin } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { listContainer, listItem, handleSpotlight } from '../lib/motion';

const postsData = [
    {
        id: 2,
        heading: 'AvoLands Leave Management System',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📝 A Leave Management System where a company can track and log all employee leave requests.',
        tools: '⚛️ ReactJS ,🔥 supabase',
        image: '/avo.png',
        video: null,
        githubLink: 'https://claude.ai/code/artifact/2bf68fdf-70ed-48a6-bb3a-5ad0fa3b6ef8',
    },
    {
        id: 1,
        heading: '🚀 InnovAyd Task Management System',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📝 A Task Management System simulator where a user can add tasks, delete, update tasks, and plan for future events.',
        tools: '🖥️ C# , ⚛️ ReactJS , 🗃️ SQL Server , 🔥 Firebase',
        image: '/tms.png',
        video: null,
        githubLink: 'https://github.com/AydonC/InnovAydTaskManagementSystem', // GitHub link for the project
    },
    {
        id: 2,
        heading: '🧮 InnovAyd Calculators',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📊 A Calculating Application to calculate different things from BMI to Currency conversions.',
        tools: '⚛️ ReactJS',
        image: '/calc.png',
        video: null,
        githubLink: 'https://github.com/AydonC/InnovAydCalculators', // GitHub link for the project
    },
    {
        id: 3,
        heading: '🏦 ATM Simulator',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '💳 An ATM Simulator where a user can create accounts and perform transactions.',
        tools: '🖥️ C# Console App, 🗃️ SQL Server',
        image: '/MainMenu.png',
        video: null,
        githubLink: 'https://github.com/AydonC/redAcademy_ATM_OF-EXCELLENCE', // GitHub link for the project
    },
    {
        id: 4,
        heading: '📄 CV Maker',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📝 A CV maker application where a simple CV can be made to display skills and information.',
        tools: '⚛️ ReactJS',
        image: '/cv.png',
        video: null,
        githubLink: 'https://github.com/AydonC/CV-Maker', // GitHub link for the project
    },
    {
        id: 5,
        heading: '🎮 Hangman Game',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '🕹️ A Hangman game where users have to guess words before the hangman figure is completed.',
        tools: '🖥️ C# Windows Forms',
        image: '/hangman.PNG',
        video: null,
        githubLink: 'https://github.com/AydonC/Hangman', // GitHub link for the project
    },
];

const Projects = () => {
    return (
        <motion.div
            className="max-w-2xl mx-auto p-4 "
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
        >
            {/* Pinned Post Label above the first post */}
            <div className="text-gray-500 font-semibold mb-4 flex items-center gap-2">
                <LuPin className="h-4 w-4 -rotate-45" /> Pinned Project
            </div>

            {/* First Post (Post with id 1) */}
            {postsData.slice(0, 1).map(post => (
                <motion.div key={post.id} variants={listItem} whileHover={{ y: -4 }} onMouseMove={handleSpotlight} className="spotlight-card relative overflow-hidden bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-md mb-4 transition-colors hover:border-purple-500/40 hover:bg-gray-800/60">
                    <div className="flex items-center mb-2">
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4 z-[40] relative"
                        />
                        <div>
                            <h3 className="font-bold">{post.user}</h3>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <div className="mb-2 text-2xl">
                        <strong>{post.heading}</strong>
                    </div>
                    <p className="mb-2">{post.content}</p>

                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" loading="lazy" decoding="async" className="w-full rounded-lg z-[40] relative" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls preload="none" className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tools.split(',').map((tool, i) => (
                            <span
                                key={`${post.id}-${i}`}
                                className="rounded-full bg-purple-600/15 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-500/30"
                            >
                                {tool.trim()}
                            </span>
                        ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-2">
                        <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-medium text-purple-400 hover:text-purple-300 hover:underline"
                        >
                            <SiGithub className="h-4 w-4" /> View on GitHub
                        </a>
                    </div>
                </motion.div>
            ))}

            {/* Regular Posts */}
            {postsData.slice(1).map(post => (
                <motion.div key={post.id} variants={listItem} whileHover={{ y: -4 }} onMouseMove={handleSpotlight} className="spotlight-card relative overflow-hidden bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-md mb-4 transition-colors hover:border-purple-500/40 hover:bg-gray-800/60">
                    <div className="flex items-center mb-2">
                        {/* Profile image */}
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-bold">{post.user}</h3>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <div className="mb-2 text-2xl">
                        <strong>{post.heading}</strong>
                    </div>
                    <p className="mb-2">{post.content}</p>

                    {/* Conditional rendering for image or video */}
                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" loading="lazy" decoding="async" className="w-full rounded-lg z-[40] relative" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls preload="none" className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tools.split(',').map((tool, i) => (
                            <span
                                key={`${post.id}-${i}`}
                                className="rounded-full bg-purple-600/15 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-500/30"
                            >
                                {tool.trim()}
                            </span>
                        ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-2">
                        <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-medium text-purple-400 hover:text-purple-300 hover:underline"
                        >
                            <SiGithub className="h-4 w-4" /> View on GitHub
                        </a>
                    </div>
                </motion.div>
            ))}
             <div className="mb-2 text-base">
                <strong>To view my other projects, I recommend checking out my GitHub!</strong> <br />
                <label
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => window.open("https://github.com/AydonC", "_blank")}
                >
                    Click here to visit my GitHub!
                </label>

            </div>
        </motion.div>
    );
};

export default Projects;
