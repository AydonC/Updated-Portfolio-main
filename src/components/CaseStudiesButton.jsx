import React from "react";
import { motion } from "framer-motion";
import { LuArrowLeft, LuBriefcase } from "react-icons/lu";

// Floating action button that expands on hover.
// On the profile it invites users to the Case Studies page;
// on the Case Studies page it turns into a "Back to Profile" control.
const CaseStudiesButton = ({ active }) => {
    const target = active ? "#/" : "#/case-studies";
    const label = active ? "Back to Profile" : "View Case Studies";
    const Icon = active ? LuArrowLeft : LuBriefcase;

    const handleClick = () => {
        window.location.hash = target;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            type="button"
            onClick={handleClick}
            aria-label={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.4 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-14 items-center rounded-full bg-purple-600 pl-[18px] pr-[18px] text-white shadow-lg shadow-purple-900/40 ring-1 ring-purple-400/40 transition-all duration-300 ease-out hover:bg-purple-500 hover:pr-5 hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
            {/* Attention ring (only on the profile view) */}
            {!active && (
                <span className="absolute inset-0 -z-10 rounded-full bg-purple-500 opacity-60 blur-[2px] motion-safe:animate-ping" />
            )}

            <Icon className="h-5 w-5 shrink-0" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:max-w-[180px] group-hover:opacity-100">
                {label}
            </span>
        </motion.button>
    );
};

export default CaseStudiesButton;
