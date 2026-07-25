import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Animated aurora background — a soft, slowly drifting purple gradient that sits
// behind the page content.
//
// Adapted from the "AuroraBackground" component by @dhileepkumargm on 21st.dev
// (https://21st.dev/@dhileepkumargm/components/aurora-background-1). Changes:
// recoloured from blue/indigo to the site's purple/violet/fuchsia palette,
// turned into a fixed decorative layer instead of a content wrapper, softened
// (lower opacity + blur + vignette), and made reduced-motion aware — the
// drifting animation is a backgroundPosition change, which the global
// <MotionConfig reducedMotion="user"> does not mute on its own.
const AuroraBackground = ({ className = "" }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
        >
            <motion.div
                initial={{ backgroundPosition: "0% 50%" }}
                animate={
                    shouldReduceMotion
                        ? undefined
                        : { backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"] }
                }
                transition={{
                    duration: 22,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="absolute inset-0 h-full w-full scale-[1.6] transform-gpu opacity-[0.35] blur-[2px] [background-image:var(--aurora)] [background-size:200%_200%]"
                style={{
                    "--purple-700": "#7e22ce",
                    "--purple-500": "#a855f7",
                    "--violet-500": "#8b5cf6",
                    "--fuchsia-500": "#d946ef",
                    "--indigo-400": "#818cf8",
                    "--aurora":
                        "repeating-linear-gradient(100deg, var(--purple-700) 10%, var(--indigo-400) 15%, var(--violet-500) 20%, var(--fuchsia-500) 25%, var(--purple-500) 30%)",
                }}
            />
            {/* Vignette so the aurora melts into the dark page toward the edges. */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0a0a0a_92%)]" />
        </div>
    );
};

export default AuroraBackground;
