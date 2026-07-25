import React from "react";
import { motion } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";

// ---------------------------------------------------------------------------
// Client case studies.
// Edit this array to add / update your real client work. Each study renders as
// a full card below. `image` is optional (uses files from /public), and
// `results` is a short list of measurable outcomes.
// ---------------------------------------------------------------------------
const caseStudies = [
    {
        id: 1,
        title: "Task Management Platform",
        client: "redAcademy — Live Client Project",
        year: "2025",
        summary:
            "Designed and built a full-stack task management system that let a client's team create, assign and track work in real time.",
        problem:
            "The client relied on scattered spreadsheets, which made it hard to see who was working on what and when things were due.",
        solution:
            "Delivered a React front-end backed by a C# Web API and SQL Server, with Firebase for real-time updates and authentication.",
        results: [
            "Centralised tasks into a single source of truth",
            "Real-time status updates across the team",
            "Reusable component library for future features",
        ],
        tools: ["React", "C# Web API", "SQL Server", "Firebase"],
        image: "/tms.png",
        link: "https://github.com/AydonC/InnovAydTaskManagementSystem",
    },
    {
        id: 2,
        title: "Utility Calculators Suite",
        client: "Internal Tooling",
        year: "2025",
        summary:
            "A collection of focused calculators (BMI, currency conversion and more) delivered as a single responsive React app.",
        problem:
            "Users needed quick, reliable calculations without juggling several separate tools or websites.",
        solution:
            "Built a modular React app where each calculator is an isolated, testable component sharing a consistent UI.",
        results: [
            "One app replacing multiple ad-hoc tools",
            "Fully responsive on mobile and desktop",
            "Easy to extend with new calculators",
        ],
        tools: ["React", "Tailwind CSS"],
        image: "/calc.png",
        link: "https://github.com/AydonC/InnovAydCalculators",
    },
    {
        id: 3,
        title: "Banking System Simulator",
        client: "redAcademy — Back-End Project",
        year: "2024",
        summary:
            "A console-based ATM simulator handling account creation and secure transactions against a SQL Server database.",
        problem:
            "Needed a training-grade system to model real banking flows — accounts, deposits, withdrawals and balances — safely.",
        solution:
            "Implemented clean C# service layers with validation and transaction handling backed by SQL Server.",
        results: [
            "Robust transaction handling with input validation",
            "Clear separation of data and business logic",
            "Solid foundation for adding new account types",
        ],
        tools: ["C# Console", "SQL Server"],
        image: "/MainMenu.png",
        link: "https://github.com/AydonC/redAcademy_ATM_OF-EXCELLENCE",
    },
];

const CaseStudyCard = ({ study, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -6 }}
        className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 shadow-lg backdrop-blur-sm transition-colors hover:border-purple-500/60 hover:shadow-purple-900/30"
    >
        <div className="grid gap-0 md:grid-cols-2">
            {/* Media */}
            <div className="relative min-h-[220px] bg-gray-950">
                {study.image ? (
                    <img
                        src={study.image}
                        alt={`${study.title} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-6xl opacity-30">
                        💼
                    </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-purple-300 ring-1 ring-purple-400/30">
                    {study.year}
                </span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-400">
                    {study.client}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">{study.title}</h2>
                <p className="mt-3 text-gray-300">{study.summary}</p>

                <div className="mt-5 space-y-4 text-sm">
                    <div>
                        <h3 className="font-semibold text-gray-200">The Challenge</h3>
                        <p className="mt-1 text-gray-400">{study.problem}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-200">What I Built</h3>
                        <p className="mt-1 text-gray-400">{study.solution}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-200">Outcome</h3>
                        <ul className="mt-1 space-y-1 text-gray-400">
                            {study.results.map((result) => (
                                <li key={result} className="flex items-start">
                                    <span className="mr-2 text-purple-400">✓</span>
                                    <span>{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tools */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                        <span
                            key={tool}
                            className="rounded-full bg-purple-600/15 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-purple-500/30"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                {study.link && (
                    <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center font-semibold text-purple-400 hover:text-purple-300 hover:underline"
                    >
                        View project 🔗
                    </a>
                )}
            </div>
        </div>
    </motion.article>
);

const CaseStudies = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
            {/* Animated aurora background (21st.dev, recoloured) */}
            <AuroraBackground />
            {/* Background Logo */}
            <img
                src="/logoMain.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none fixed right-0 top-[65%] z-0 w-[600px] -translate-y-1/2 select-none opacity-10"
            />

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                    <a href="#/" className="flex items-center gap-2">
                        <img src="/logoMain.png" alt="InnovAyd logo" className="h-12 w-12 object-contain" />
                        <span className="text-lg font-bold">InnovAyd</span>
                    </a>
                    <a
                        href="#/"
                        className="rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500 hover:text-white"
                    >
                        ← Profile
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10 mx-auto max-w-5xl px-4 pt-14 pb-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold sm:text-5xl"
                >
                    Client <span className="text-purple-500">Case Studies</span>
                </motion.h1>
                <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                    A closer look at the real-world problems I've solved for clients and teams —
                    the challenge, the build, and the outcome.
                </p>
            </section>

            {/* Case study cards */}
            <main className="relative z-10 mx-auto max-w-5xl space-y-8 px-4 pb-24">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard key={study.id} study={study} index={index} />
                ))}

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-purple-500/30 bg-purple-600/10 p-8 text-center"
                >
                    <h2 className="text-2xl font-bold">Have a project in mind?</h2>
                    <p className="mx-auto mt-2 max-w-xl text-gray-300">
                        I'm available for freelance and collaborative work. Let's build something great together.
                    </p>
                    <motion.a
                        href="mailto:cupido.aydon@gmail.com"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-5 inline-flex items-center rounded-lg bg-purple-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-purple-500"
                    >
                        Get in touch
                    </motion.a>
                </motion.div>
            </main>

            <footer className="relative z-10 bg-gray-900 py-3 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Aydon Cupido. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CaseStudies;
