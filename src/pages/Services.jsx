import React from "react";
import { motion } from "framer-motion";
import {
    LuArrowLeft,
    LuCode,
    LuServer,
    LuDatabase,
    LuPalette,
    LuWrench,
    LuUsers,
    LuCheck,
    LuArrowUpRight,
} from "react-icons/lu";
import AuroraBackground from "../components/AuroraBackground";
import { handleSpotlight } from "../lib/motion";

// ---------------------------------------------------------------------------
// Services — "What I can do for you". Edit this array to tune the offerings.
// ---------------------------------------------------------------------------
const services = [
    {
        icon: LuCode,
        title: "Full-Stack Web Development",
        summary:
            "End-to-end web applications with modern React.js front-ends and robust C# / ASP.NET back-ends.",
        points: [
            "Responsive, component-driven React.js interfaces",
            "C# & ASP.NET Web API back-ends",
            "Clean, maintainable, testable code",
        ],
    },
    {
        icon: LuServer,
        title: "REST API Development & Integration",
        summary:
            "Design and build reliable RESTful APIs, and wire your app up to the services it depends on.",
        points: [
            "Well-structured RESTful endpoints",
            "Third-party & internal service integration",
            "Auth, validation and error handling",
        ],
    },
    {
        icon: LuDatabase,
        title: "Database Design & Management",
        summary:
            "Schema design, queries and tuning with SQL Server and PostgreSQL to keep data fast and consistent.",
        points: [
            "Relational schema design",
            "Query writing & optimization",
            "SQL Server and PostgreSQL",
        ],
    },
    {
        icon: LuPalette,
        title: "UI / UX Design & Implementation",
        summary:
            "User-friendly interfaces designed in Figma and faithfully built to spec — accessible and on-brand.",
        points: [
            "Figma wireframes & prototypes",
            "Pixel-accurate implementation",
            "Accessible, responsive layouts",
        ],
    },
    {
        icon: LuWrench,
        title: "Maintenance, Bug Fixing & Support",
        summary:
            "Keep your product stable and healthy with fixes, performance work, UAT support and smooth deployments.",
        points: [
            "Bug fixing & performance tuning",
            "UAT and post-release support",
            "Deployments & ongoing maintenance",
        ],
    },
    {
        icon: LuUsers,
        title: "Agile Delivery & Collaboration",
        summary:
            "Work inside your team using Agile and SDLC practices to ship features that match business needs.",
        points: [
            "Sprint-based feature delivery",
            "Cross-functional collaboration",
            "Clear communication & updates",
        ],
    },
];

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            onMouseMove={handleSpotlight}
            className="spotlight-card relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6 shadow-lg backdrop-blur-sm transition-colors hover:border-purple-500/60 hover:shadow-purple-900/30"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/15 text-purple-300 ring-1 ring-purple-500/30">
                <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-gray-400">{service.summary}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-300">
                {service.points.map((p) => (
                    <li key={p} className="flex items-start">
                        <LuCheck className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-purple-400" strokeWidth={3} />
                        <span>{p}</span>
                    </li>
                ))}
            </ul>
        </motion.article>
    );
};

const Services = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
            <AuroraBackground />
            <img
                src="/logoMain.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none fixed right-0 top-[65%] z-0 w-[600px] -translate-y-1/2 select-none opacity-10"
            />

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 pr-16">
                    <a href="#/" className="flex items-center gap-2">
                        <img src="/logoMain.png" alt="InnovAyd logo" className="h-12 w-12 object-contain" />
                        <span className="text-lg font-bold">InnovAyd</span>
                    </a>
                    <a
                        href="#/"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500 hover:text-white"
                    >
                        <LuArrowLeft className="h-4 w-4" /> Profile
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
                    What I Can <span className="text-purple-400">Do For You</span>
                </motion.h1>
                <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                    From first line of code to a stable, shipped product — here's how I can help bring
                    your project to life.
                </p>
            </section>

            {/* Service cards */}
            <main className="relative z-10 mx-auto max-w-5xl px-4 pb-24">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-10 rounded-2xl border border-purple-500/30 bg-purple-600/10 p-8 text-center"
                >
                    <h2 className="text-2xl font-bold">Let's work together</h2>
                    <p className="mx-auto mt-2 max-w-xl text-gray-300">
                        Have a project or an idea? I'm available for freelance and collaborative work —
                        let's build something great.
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                        <motion.a
                            href="mailto:cupido.aydon@gmail.com"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-purple-500"
                        >
                            Get in touch
                        </motion.a>
                        <a
                            href="#/case-studies"
                            className="inline-flex items-center gap-1 rounded-lg border border-gray-700 px-6 py-2.5 font-semibold text-gray-200 transition-colors hover:border-purple-500 hover:text-white"
                        >
                            See my work
                            <LuArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </motion.div>
            </main>

            <footer className="relative z-10 bg-gray-900 py-3 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Aydon Cupido. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Services;
