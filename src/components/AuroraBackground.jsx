import React from "react";

// Static, theme-aware background glow. Two soft accent-coloured blobs plus a
// vignette that melts into the dark page. Previously this drifted on an infinite
// loop (animating background-position), which caused continuous repaints and
// slowed the site — it's now completely static.
const AuroraBackground = ({ className = "" }) => {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
        >
            <div
                className="absolute -top-1/4 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgb(var(--accent-500) / 0.9), transparent)",
                }}
            />
            <div
                className="absolute bottom-0 right-0 h-[520px] w-[720px] translate-x-1/4 translate-y-1/4 rounded-full opacity-20 blur-[130px]"
                style={{
                    background:
                        "radial-gradient(closest-side, rgb(var(--accent-700) / 0.9), transparent)",
                }}
            />
            {/* Vignette so the glow melts into the dark page toward the edges. */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0a0a0a_92%)]" />
        </div>
    );
};

export default AuroraBackground;
