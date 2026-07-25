import React from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiJavascript, SiSharp, SiDotnet, SiPostgresql, SiGit,
} from "react-icons/si";
import {
    LuRocket, LuCompass, LuLayers, LuHandshake, LuGraduationCap,
    LuDatabase, LuCloud, LuCheck, LuBadgeCheck, LuKanban, LuTrophy,
    LuLanguages,
} from "react-icons/lu";
import { handleSpotlight } from "../lib/motion";

const current = {
    role: "Junior Software Engineer",
    company: "redPanda Software",
    location: "Cape Town",
    period: "Jun 2025 – Present",
    points: [
        "Contributed to live business management systems in an Agile team, owning full-stack feature delivery and RESTful API development with React.js, C#, ASP.NET Web APIs, PostgreSQL and SQL Server",
        "Improved application reliability by resolving bugs, performing maintenance and supporting performance enhancements across production systems",
        "Supported UAT, troubleshooting, deployments and post-release issue resolution to keep releases stable and user-ready",
        "Collaborated with cross-functional stakeholders to deliver software updates aligned with business needs",
    ],
};

const experience = [
    {
        role: "Junior Software Developer Intern",
        company: "redAcademy",
        location: "Cape Town",
        period: "Jun 2024 – May 2025",
        points: [
            "Supported the development of financial calculators and central maintenance systems, contributing across front-end and back-end tasks",
            "Enhanced usability and functionality by building interfaces in React.js and JavaScript and supporting API integration and PostgreSQL work",
            "Applied unit testing, Figma-based UI design, Agile practices and SDLC workflows to deliver cleaner, more maintainable features",
        ],
    },
    {
        role: "Learnership for Network+",
        company: "Vistex Africa",
        location: "Stellenbosch",
        period: "Dec 2023 – Apr 2024",
        points: [
            "Earned the CompTIA Network+ certification, building foundational networking knowledge (TCP/IP, routing, troubleshooting)",
            "Applied that grounding to better support web applications, APIs and deployment environments",
        ],
    },
];

const techStack = [
    {
        group: "Languages",
        items: [
            { icon: SiSharp, label: "C#", color: "#9B5FB0" },
            { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
        ],
    },
    {
        group: "Frameworks",
        items: [
            { icon: SiDotnet, label: "ASP.NET Web API", color: "#512BD4" },
            { icon: SiReact, label: "React.js", color: "#61DAFB" },
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
        group: "Cloud & Tools",
        items: [
            { icon: LuCloud, label: "Azure", color: "#3AA0E3" },
            { icon: SiGit, label: "Git", color: "#F05032" },
            { icon: LuKanban, label: "Agile PM", color: "#A855F7" },
        ],
    },
];

const canBring = [
    "Hands-on experience shipping production web apps with C#, ASP.NET Web APIs and React.js",
    "End-to-end delivery: RESTful APIs, bug fixes, performance improvements and unit testing",
    "Deployments and UAT support that keep live releases stable and user-ready",
    "Agile teamwork and collaboration with cross-functional stakeholders",
    "Full-stack range across front-end, back-end, SQL Server and PostgreSQL",
    "A problem-solver's mindset focused on reliability and detail",
];

const accomplishments = [
    "Built a Leave Management System that replaced Excel-based tracking — automating leave logging across leave types to improve accuracy and save employee hours",
    "Developed a School Website with an Admin Dashboard that centralised school communication, reducing reliance on social media and making information accessible to all stakeholders",
];

const education = [
    "Higher Certificate in Software Engineering — Eduvos, Tyger Valley · 2023–2024 · 83%",
    "Higher Certificate in Software Development — Eduvos, Tyger Valley · 2022–2023 · 83%",
    "Higher Certificate in Systems Development — redAcademy · 2024–2025",
    "CompTIA Network+ — Vistex Africa, Stellenbosch",
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
                    I'm <span className="font-semibold text-white">Aydon Cupido</span> — a
                    <span className="font-semibold text-white"> Full Stack Software Engineer</span> with
                    hands-on experience building production web applications using C#, ASP.NET Web APIs,
                    React.js, JavaScript, PostgreSQL, SQL Server, Azure and Git. I've delivered end-to-end
                    features, RESTful APIs, bug fixes, performance improvements, unit testing, deployments
                    and UAT support across live systems in Agile teams. 💻
                </p>
                <p className="mt-4 leading-relaxed text-gray-400">
                    I've contributed at <span className="font-medium text-purple-300">redPanda Software</span> and
                    <span className="font-medium text-purple-300"> redAcademy</span> on business management
                    systems, financial calculators and maintenance platforms, and built personal projects
                    including a Leave Management System and a School Website with an Admin Dashboard. Backed by
                    three Higher Certificates in software-related fields, two completed at 83%. 🚀
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

            {/* Accomplishments */}
            <Section title="Accomplishments" icon={LuTrophy}>
                <div className="space-y-3">
                    {accomplishments.map((item) => (
                        <div
                            key={item}
                            onMouseMove={handleSpotlight}
                            className="spotlight-card relative overflow-hidden flex items-start rounded-xl border border-purple-500/30 bg-purple-600/10 p-4 text-gray-200"
                        >
                            <LuTrophy className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
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

            {/* Languages */}
            <Section title="Languages" icon={LuLanguages}>
                <div className="flex flex-wrap gap-2">
                    {["English", "Afrikaans"].map((lang) => (
                        <span
                            key={lang}
                            className="rounded-full bg-gray-900/60 px-3 py-1.5 text-sm font-medium text-gray-200 ring-1 ring-gray-700"
                        >
                            {lang}
                        </span>
                    ))}
                </div>
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
