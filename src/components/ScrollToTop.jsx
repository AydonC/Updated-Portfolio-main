import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowUp } from "react-icons/lu";

// Floating "back to top" button that fades in once the user scrolls past a
// threshold. Sits bottom-left so it never collides with the right-hand FAB
// stack. Always mounted and animated via the `animate` prop — AnimatePresence
// exit animations deadlock under React 19 StrictMode here, so we avoid them.
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0.6,
                pointerEvents: visible ? "auto" : "none",
            }}
            initial={false}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="fixed bottom-6 left-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-gray-900/80 text-purple-200 shadow-lg shadow-black/40 backdrop-blur transition-colors hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
            <LuArrowUp className="h-5 w-5" />
        </motion.button>
    );
};

export default ScrollToTop;
