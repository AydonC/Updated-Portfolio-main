// src/components/TwitterFeed.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { listContainer, listItem } from '../lib/motion';

// Example posts data (easy to modify in code)
const postsData = [
    {
        id: 1,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg', 
        content: 'Welcome Visitor! This is my portfolio site where I share details about my journey and make posts about my projects. I hope you enjoy this site and click on my links to connect with me! 🚀🔥🌐',
        image: '/him.jpg', 
        video: null, 
    },
    {
        id: 2,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg', 
        content: 'Hard work pays off 👨‍💻',
        image: '/aydonGrad.jpg', 
        video: null, 
    },
    {
        id: 3,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg', 
        content: 'Do you know your OOP? Very much important! 💡💻',
        image: null, 
        video: '/OOP.mp4', 
    },
    {
        id: 4,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg', 
        content: 'Love my team! ❤️👩‍💻👨‍💻',
        image: '/peers.jpeg', 
        video: null, 
    },
];

const Feed = () => {
    return (
        <motion.div
            className="max-w-2xl mx-auto p-4 "
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
        >

            {/* Pinned Post Label above the first post */}
            <div className="text-gray-500 font-semibold mb-4 flex items-center">
                <i className="fas fa-thumbtack mr-2"></i> &nbsp; Pinned Post 📌
            </div>

            {/* First Post (Post with id 1) */}
            {postsData.slice(0, 1).map(post => (
                <motion.div key={post.id} variants={listItem} whileHover={{ y: -4 }} className="bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-md mb-4 transition-colors hover:border-purple-500/40 hover:bg-gray-800/60 ">
                    <div className="flex items-center mb-2">
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
                    <h1 className="mb-1 text-2xl"><strong>Console.WriteLine("Hello World!") 🖥️👋</strong></h1>
                    <p className="mb-2">{post.content}</p>

                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg z-[40] relative" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg aspect-video">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </motion.div>
            ))}

            {/* Regular Posts */}
            {postsData.slice(1).map(post => (
                <motion.div key={post.id} variants={listItem} whileHover={{ y: -4 }} className="bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-md mb-4 transition-colors hover:border-purple-500/40 hover:bg-gray-800/60">
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
                    <p className="mb-2">{post.content}</p>

                    {/* Conditional rendering for image or video */}
                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg z-[40] relative" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg aspect-video">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Feed;
