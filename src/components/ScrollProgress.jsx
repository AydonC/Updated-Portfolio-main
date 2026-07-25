import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient bar pinned to the top of the viewport that fills
// as the user scrolls down the page.
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500"
        />
    );
};

export default ScrollProgress;
