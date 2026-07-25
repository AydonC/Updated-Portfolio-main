// Shared framer-motion variants for a consistent motion system across the site.
// Tuned to the ui-ux-pro-max motion guidelines: small offsets (reads as a fade,
// not a slide), 150–450ms durations, ease-out entrances, and gentle staggers.
// All motion here is automatically muted for users who set
// `prefers-reduced-motion` via the <MotionConfig reducedMotion="user"> wrapper
// in main.jsx.

// Single element fading up into view on scroll.
export const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.4, ease: "easeOut" },
};

// Parent container that reveals its children in a gentle wave.
// Children must use the `listItem` variants and the parent must set
// initial="hidden" whileInView="show".
export const listContainer = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.07, delayChildren: 0.04 },
    },
};

// Child card used inside a `listContainer`.
export const listItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Press + hover feedback for buttons and other tap targets.
// Displacement stays small so it reads as feedback, not motion.
export const tapFeedback = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.94 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
};

// Tab content swap: quick asymmetric fade/slide so back-and-forth feels snappy.
export const tabSwap = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.22, ease: "easeOut" },
};
