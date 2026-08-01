import React from "react";
import { motion } from "framer-motion";
import { LuSparkles } from "react-icons/lu";

// Floating action button that sits at the top of the right-hand FAB stack
// (above the Download CV button) and opens the Services page.
const ServicesButton = () => {
    const handleClick = () => {
        window.location.hash = "#/services";
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            type="button"
            onClick={handleClick}
            aria-label="What I can do for you — Services"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.6 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-14 items-center rounded-full bg-purple-600 pl-[18px] pr-[18px] text-white shadow-lg shadow-purple-900/40 ring-1 ring-purple-400/40 transition-all duration-300 ease-out hover:bg-purple-500 hover:pr-5 hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
            <LuSparkles className="h-5 w-5 shrink-0" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:max-w-[200px] group-hover:opacity-100">
                Services
            </span>
        </motion.button>
    );
};

export default ServicesButton;
