import React from 'react';
import { motion } from 'framer-motion';
import { LuPin, LuArrowUpRight } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { listContainer, listItem, handleSpotlight } from '../lib/motion';

const postsData = [
    {
        id: 'avolands',
        heading: 'Leave Management System',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📝 A Leave Management System where a company can track and log all employee leave requests.',
        tools: '⚛️ ReactJS ,🔥 supabase',
        image: '/avo.png',
        video: null,
        live: true, // Currently live in production for a client
    },
    {
        id: 'tms',
        heading: '🚀 InnovAyd Task Management System',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📝 A Task Management System simulator where a user can add tasks, delete, update tasks, and plan for future events.',
        tools: '🖥️ C# , ⚛️ ReactJS , 🗃️ SQL Server , 🔥 Firebase',
        image: '/tms.png',
        video: null,
        githubLink: 'https://github.com/AydonC/InnovAydTaskManagementSystem',
    },
    {
        id: 'calculators',
        heading: '🧮 InnovAyd Calculators',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📊 A Calculating Application to calculate different things from BMI to Currency conversions.',
        tools: '⚛️ ReactJS',
        image: '/calc.png',
        video: null,
        githubLink: 'https://github.com/AydonC/InnovAydCalculators',
    },
    {
        id: 'atm',
        heading: '🏦 ATM Simulator',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '💳 An ATM Simulator where a user can create accounts and perform transactions.',
        tools: '🖥️ C# Console App, 🗃️ SQL Server',
        image: '/MainMenu.png',
        video: null,
        githubLink: 'https://github.com/AydonC/redAcademy_ATM_OF-EXCELLENCE',
    },
    {
        id: 'cv-maker',
        heading: '📄 CV Maker',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '📝 A CV maker application where a simple CV can be made to display skills and information.',
        tools: '⚛️ ReactJS',
        image: '/cv.png',
        video: null,
        githubLink: 'https://github.com/AydonC/CV-Maker',
    },
    {
        id: 'hangman',
        heading: '🎮 Hangman Game',
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: '🕹️ A Hangman game where users have to guess words before the hangman figure is completed.',
        tools: '🖥️ C# Windows Forms',
        image: '/hangman.PNG',
        video: null,
        githubLink: 'https://github.com/AydonC/Hangman',
    },
];

const ProjectCard = ({ post }) => {
    const { live } = post;
    return (
        <motion.div
            variants={listItem}
            whileHover={{ y: -4 }}
            className={`relative mb-4 ${live ? 'mt-6' : ''}`}
        >
            {/* "Currently Live" badge — sits centered on the top of the green ring */}
            {live && (
                <span className="absolute -top-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-green-500/60 bg-gray-950 px-3 py-0.5 text-xs font-semibold text-green-300 shadow-sm shadow-green-900/40">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    Currently Live for Client
                </span>
            )}

            <div
                onMouseMove={handleSpotlight}
                className={`spotlight-card relative overflow-hidden rounded-xl p-4 shadow-md transition-colors ${
                    live
                        ? 'live-ring border-2 border-green-500/60 bg-gray-900/40 hover:border-green-400/80'
                        : 'border border-gray-800 bg-gray-900/40 hover:border-purple-500/40 hover:bg-gray-800/60'
                }`}
            >
                <div className="mb-2 flex items-center">
                    <img
                        src={post.profileImage}
                        alt="Profile"
                        className="relative z-[40] mr-4 h-12 w-12 rounded-full object-cover shrink-0"
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
                        <img
                            src={post.image}
                            alt="Post Media"
                            loading="lazy"
                            decoding="async"
                            className="relative z-[40] w-full rounded-lg"
                        />
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

                <div className="mt-2 flex flex-wrap items-center gap-4">
                    {post.githubLink && (
                        <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-medium text-purple-400 hover:text-purple-300 hover:underline"
                        >
                            <SiGithub className="h-4 w-4" /> View on GitHub
                        </a>
                    )}
                    {live && (
                        <a
                            href="#/case-studies"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-green-900/40 transition-colors hover:bg-green-500"
                        >
                            View Case Study <LuArrowUpRight className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

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

            {postsData.map((post) => (
                <ProjectCard key={post.id} post={post} />
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
