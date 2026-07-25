import React from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiJavascript, SiHtml5, SiSharp, SiDotnet,
    SiPostgresql, SiFirebase, SiFigma, SiGithub,
} from "react-icons/si";
import {
    LuRocket, LuCompass, LuLayers, LuHandshake, LuGraduationCap,
    LuDatabase, LuCloud, LuCheck, LuBadgeCheck,
} from "react-icons/lu";
import { handleSpotlight } from "../lib/motion";

const current = {
    role: "Junior Software Engineer",
    company: "redPanda Software",
    location: "Cape Town",
    period: "June 2025 – Present",
    points: [
        "Building scalable web applications with React.js and APIs with C#",
        "Monitoring and maintaining services for continuous delivery",
        "Resolving UAT issues and improving system stability during client testing",
        "Collaborating with cross-functional teams in an agile environment",
    ],
};

const experience = [
    {
        role: "Software Developer Sprinter",
        company: "redAcademy",
        location: "Cape Town",
        period: "June 2024 – May 2025",
        points: [
            "Built web apps including Financial Calculators and Central Maintenance projects",
            "Crafted React.js user interfaces and designed them in Figma",
            "Unit testing, API integration and PostgreSQL databases",
        ],
    },
    {
        role: "Network+ Learnership",
        company: "Vistex Africa",
        location: "Stellenbosch",
        period: "Dec 2023 – April 2024",
        points: [
            "Trained toward the CompTIA Network+ certification",
            "Networking fundamentals: infrastructure, protocols, troubleshooting & security",
        ],
    },
];

const techStack = [
    {
        group: "Frontend",
        items: [
            { icon: SiReact, label: "React.js", color: "#61DAFB" },
            { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
            { icon: SiHtml5, label: "HTML & CSS", color: "#E34F26" },
        ],
    },
    {
        group: "Backend",
        items: [
            { icon: SiSharp, label: "C#", color: "#9B5FB0" },
            { icon: SiDotnet, label: ".NET Web API", color: "#512BD4" },
        ],
    },
    {
        group: "Databases",
        items: [
            { icon: LuDatabase, label: "SQL Server", color: "#CC2927" },
            { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
        ],
    },
    {
        group: "Tools & Design",
        items: [
            { icon: SiGithub, label: "GitHub", color: "#e5e5e5" },
            { icon: LuCloud, label: "Azure", color: "#3AA0E3" },
            { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
            { icon: SiFigma, label: "Figma", color: "#F24E1E" },
        ],
    },
];

const canBring = [
    "2 years of hands-on experience shipping React & C# applications",
    "Clean, maintainable code and efficient back-end APIs",
    "Full-stack range — frontend, backend and databases",
    "Agile teamwork and cross-functional collaboration",
    "A problem-solver's mindset focused on stability and detail",
    "Design sensibility (Figma) for user-friendly interfaces",
];

const education = [
    "Higher Certificate in Software Engineering — Eduvos, Tyger Valley",
    "Higher Certificate in Software Development — Eduvos, Tyger Valley",
    "Higher Certificate in Systems Development — redAcademy, Cape Town",
    "CompTIA Network+ — Vistex Africa, Stellenbosch",
    "Foundation in Project Management — Google",
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.4 },
};

const Section = ({ title, icon: Icon, children }) => (
    <motion.section {...fadeUp} className="mt-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
            {Icon && <Icon className="h-6 w-6 text-purple-400" />}
            {title}
        </h2>
        <div className="mt-3">{children}</div>
    </motion.section>
);

const RoleCard = ({ role, company, location, period, points, highlight }) => (
    <div
        onMouseMove={handleSpotlight}
        className={`spotlight-card relative overflow-hidden rounded-2xl border p-5 ${
            highlight
                ? "border-purple-500/50 bg-purple-600/10"
                : "border-gray-800 bg-gray-900/40"
        }`}
    >
        <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
                <h3 className="text-lg font-semibold text-white">{role}</h3>
                <p className="text-purple-300">
                    {company} · <span className="text-gray-400">{location}</span>
                </p>
            </div>
            <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    highlight
                        ? "bg-green-500/15 text-green-300 ring-1 ring-green-500/30"
                        : "bg-gray-800 text-gray-300"
                }`}
            >
                {period}
            </span>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
            {points.map((p) => (
                <li key={p} className="flex items-start">
                    <span className="mr-2 text-purple-400">▹</span>
                    <span>{p}</span>
                </li>
            ))}
        </ul>
    </div>
);

const About = () => {
    return (
        <div className="mx-auto max-w-3xl p-4 sm:p-6">
            {/* Intro */}
            <motion.div
                {...fadeUp}
                className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 sm:p-8"
            >
                <h1 className="text-3xl font-bold text-white">Hi There! 👋</h1>
                <p className="mt-4 leading-relaxed text-gray-300">
                    I'm <span className="font-semibold text-white">Aydon Jon Cupido</span> — a
                    full-stack engineer with <span className="font-semibold text-white">2 years of
                    experience</span> in React, C# and SQL Server. 💻 I build scalable web
                    applications and efficient back-end APIs, writing clean, maintainable code and
                    solving complex problems along the way. 🎨
                </p>
                <p className="mt-4 leading-relaxed text-gray-400">
                    I'm passionate about creating user-friendly solutions and constantly levelling up
                    my technical skills. 🚀 I'm a team player 🤝 who's detail-oriented and driven by
                    delivering results. 🔍
                </p>
            </motion.div>

            {/* Currently doing */}
            <Section title="What I'm Currently Doing" icon={LuRocket}>
                <RoleCard {...current} highlight />
            </Section>

            {/* Experience */}
            <Section title="My Journey" icon={LuCompass}>
                <div className="space-y-4">
                    {experience.map((job) => (
                        <RoleCard key={job.company} {...job} />
                    ))}
                </div>
            </Section>

            {/* Tech Stack */}
            <Section title="My Tech Stack" icon={LuLayers}>
                <div className="space-y-4">
                    {techStack.map((cat) => (
                        <div key={cat.group}>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-400">
                                {cat.group}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map(({ icon: Icon, label, color }) => (
                                    <span
                                        key={label}
                                        className="inline-flex items-center gap-2 rounded-full bg-gray-900/60 px-3 py-1.5 text-sm font-medium text-gray-200 ring-1 ring-gray-700 transition-colors hover:ring-purple-500/50"
                                    >
                                        <Icon className="h-4 w-4" style={{ color }} />
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* What I can bring */}
            <Section title="What I Can Bring" icon={LuHandshake}>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {canBring.map((item) => (
                        <li
                            key={item}
                            className="flex items-start rounded-xl border border-gray-800 bg-gray-900/40 p-3 text-gray-300"
                        >
                            <LuCheck className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-purple-400" strokeWidth={3} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            {/* Education */}
            <Section title="Education & Certifications" icon={LuGraduationCap}>
                <ul className="space-y-2">
                    {education.map((q) => (
                        <li key={q} className="flex items-start text-gray-300">
                            <LuBadgeCheck className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                            <span>{q}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            {/* Signature card */}
            <motion.div
                {...fadeUp}
                className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-6"
            >
                <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-purple-500/50 bg-gray-300">
                    <img src="/aydon.jpg" alt="Aydon Cupido" className="h-full w-full object-cover" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white">Aydon Cupido</h3>
                    <p className="text-gray-400">Full Stack Engineer 👨‍💻</p>
                    <p className="mt-2 font-medium text-purple-300">
                        Feel free to connect with me and stay awesome! 🤩
                    </p>
                </div>
                <img src="/signature.png" alt="Signature" className="ml-auto h-24 w-auto opacity-90" />
            </motion.div>
        </div>
    );
};

export default About;
