import React from 'react';

const postsData = [
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
        image: '/hangman.png',
        video: null,
        githubLink: 'https://github.com/AydonC/Hangman', // GitHub link for the project
    },
];

const Projects = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Pinned Post Label above the first post */}
            <div className="text-gray-500 font-semibold mb-4 flex items-center">
                <i className="fas fa-thumbtack mr-2"></i> &nbsp; Pinned Project
            </div>

            {/* First Post (Post with id 1) */}
            {postsData.slice(0, 1).map(post => (
                <div key={post.id} className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-800">
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
                    <div className="mb-2 text-2xl">
                        <strong>{post.heading}</strong>
                    </div>
                    <p className="mb-2">{post.content}</p>

                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    <div className="text-gray-500 font-semibold mb-4 flex items-center">
                        {post.tools}
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-2">
                        <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center"
                        >
                            🔗 View on GitHub
                        </a>
                    </div>
                </div>
            ))}

            {/* Regular Posts */}
            {postsData.slice(1).map(post => (
                <div key={post.id} className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-800">
                    <div className="text-gray-500 font-semibold mb-4 flex items-center">
                        <i className="fas fa-thumbtack mr-2"></i> &nbsp; Pinned Project
                    </div>
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
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <div className="text-gray-500 font-semibold mb-4 flex items-center">
                        {post.tools}
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-2">
                        <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center"
                        >
                            🔗 View on GitHub
                        </a>
                    </div>
                </div>
                
            ))}
             <div className="mb-2 text-1xl">
                <strong>To view my other projects, i recommend checking out my github!</strong> <br />
                <label
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => window.open("https://github.com/AydonC", "_blank")}
                >
                    Click here to visit my GitHub!
                </label>

            </div>
        </div>
    );
};

export default Projects;
