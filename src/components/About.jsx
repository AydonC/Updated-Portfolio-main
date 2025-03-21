import React from "react";

const About = () => {
    return (
        <div className="bg-gray-950 flex items-center justify-center p-6">
            <div className="max-w-4xl bg-gray-950 shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-white-950 mb-4">Hi There! 👋</h1>
                <p className="text-gray-400 leading-relaxed">
                    I am Aydon Jon Cupido. A full-stack engineer with expertise in React.JS and C#. 💻 I love to code and to solve problems with creativity. 🎨
                    <br /><br /><br />
                    I am motivated Software Developer with a background in Software, completing 3 Higher Certifications with 80%+ averages. 🎓 I gained expertise in C#, Web APIs, SQL Server, React.js, HTML, and CSS. I acquired these skills through my studies and through a program at redAcademy where I gained experience as a Back-End and Front-End developer. My role gave me an opportunity to work on live projects and maintain systems efficiently. 🚀 I am always open to learning and I am a team player 🤝. I deliver results and I am detail-orientated. 🔍
                </p>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-white-950">My Expertise Languages 🌍</h2>
                    <p className="text-gray-400 mt-2">
                        - ReactJS ⚛️ <br />
                        - C# (Web API, .Net, Console, Windows Forms) 🖥️ <br />
                        - SQL Server 🗃️
                    </p>
                    <br /><br />
                    <h2 className="text-2xl font-semibold text-white-950">My Skills 💡</h2>
                    <p className="text-gray-400 mt-2">
                        - Skilled in C#, SQL Server, and React.js for building scalable web applications. 🛠️ <br />
                        - Proficient in version control using Github and Azure for efficient collaboration and code management. 🔧 <br />
                        - Currently upskilling in PostgreSQL and Figma to enhance database management and design capabilities. 📊 🎨 <br />
                        - Strong leadership and project management skills to guide teams and drive successful project execution. 💼
                    </p>

                    <br /><br />
                    <strong>Feel free to connect with me and stay awesome! 🤩</strong>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-white-800 sm:text-xl md:text-2xl lg:text-3xl"></h2>
                    <div className="flex flex-wrap items-center mt-4 space-x-4 sm:space-x-2 md:space-x-4 lg:space-x-6">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white bg-gray-300 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48">
                            <img
                                src="/aydon.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="sm:text-center md:text-left">
                            <h3 className="text-lg font-medium text-white-700 sm:text-base md:text-lg lg:text-xl">Aydon Cupido</h3>
                            <p className="text-gray-500 sm:text-sm md:text-base lg:text-lg">Software Engineer 👨‍💻</p>
                        </div>

                        <img
                            src="/signature.png"
                            alt="Profile"
                            className="w-36 h-36 translate-x-1/2 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48"
                        />
                    </div>

                    <br />
                </div>

            </div>
        </div>
    );
};

export default About;
