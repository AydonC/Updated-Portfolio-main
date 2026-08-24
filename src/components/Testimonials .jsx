import React from 'react';
import { motion } from 'framer-motion';
import { LuPin } from 'react-icons/lu';
import ContactFormModal from './ContactForm';
import { listContainer, listItem, handleSpotlight } from '../lib/motion';

// Example posts data (easy to modify in code)
const postsData = [
    {
        id: 1,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: 'If you want to show some love and leave a message, Fill out this form please!❤️',
        image: null,
        video: null,
    },
    {
        id: 2,
        user: 'Mahomed Goolam',
        username: '@MahomedGoolam',
        profileImage: '/default.png',
        content: 'Aydon has demonstrated exceptional performance and dedication throughout his studies and learnership, consistently delivering high-quality work that exceeds the average standard expected for his level. His contributions to live client projects have been of high quality, showcasing his strong technical ability and problem-solving skills. Aydon has excelled in both Front-End (React JS) and Back-End development, completing his assigned tickets with a strong focus on quality and efficiency. Aydon’s hands-on, practical approach has been a significant asset to the team, and his ability to consistently complete tasks underscores his reliability and commitment to excellence.You are destined for greatness Aydon Cupido!',
        profileUrl: 'https://www.linkedin.com/in/mahomed-hoosen-goolam-nabee-a820b6149',
        image: null,
        video: null,
    },
    {
        id: 3,
        user: 'Keenan Fourie',
        username: '@KeenanFourie',
        profileImage: 'data:image/jpeg;base64,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',
        content: ' As a friend and a former colleague I just want you to know that I am very proud of you, I have seen how far you have come and I know this is just the beginning.This website has a very modern feel to it and I love it. It is User friendly which is very important. Keep up the great work Aydon 💪.',
        profileUrl: 'fouriekeenan9@gmail.com',
        image: null,
        video: null,
    },
];

const Testimonials = () => {

    return (
        <motion.div
            className="max-w-2xl mx-auto p-4"
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
        >

            <div className="text-gray-500 font-semibold mb-4 flex items-center gap-2">
                <LuPin className="h-4 w-4 -rotate-45" /> Pinned Post
            </div>

            {/* First Post (Post with id 1) */}
            {postsData.slice(0, 1).map(post => (
                <motion.div key={post.id} variants={listItem} whileHover={{ y: -4 }} onMouseMove={handleSpotlight} className="spotlight-card relative overflow-hidden bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-md mb-4 transition-colors hover:border-purple-500/40 hover:bg-gray-800/60 ">
                    <div className="flex items-center mb-2">
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4 object-cover shrink-0"
                        />
                        <div>
                            <a href={post.profileUrl} className="font-bold hover:underline cursor-pointer">{post.user}&nbsp;&nbsp; 🔗</a>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <p className="mb-2">{post.content}</p>
                    <ContactFormModal />

                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" loading="lazy" decoding="async" className="w-full rounded-lg" />
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
                </motion.div>
            ))}

            {/* Regular Posts */}
            {postsData.slice(1).map(post => (
                <motion.div key={post.id} variants={listItem} whileHover={{ y: -4 }} onMouseMove={handleSpotlight} className="spotlight-card relative overflow-hidden bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-md mb-4 transition-colors hover:border-purple-500/40 hover:bg-gray-800/60 ">
                    <div className="flex items-center mb-2">
                        {/* Profile image */}
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4 object-cover shrink-0"
                        />
                        <div>
                            <a href={post.profileUrl} className="font-bold hover:underline">{post.user}&nbsp;&nbsp; 🔗</a>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <p className="mb-2">{post.content}</p>

                    {/* Conditional rendering for image or video */}
                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" loading="lazy" decoding="async" className="w-full rounded-lg" />
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
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Testimonials;
