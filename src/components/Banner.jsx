import React from "react";

// Static decorative dots — no animation. Positions are fixed so the banner is
// cheap to paint (the previous version animated 15 shapes + the gradient on an
// infinite loop, which hurt performance).
const dots = [
    { size: 46, top: "14%", left: "10%", opacity: 0.28, round: true },
    { size: 22, top: "68%", left: "18%", opacity: 0.22, round: false },
    { size: 30, top: "24%", left: "82%", opacity: 0.25, round: true },
    { size: 16, top: "76%", left: "72%", opacity: 0.3, round: false },
    { size: 38, top: "48%", left: "90%", opacity: 0.18, round: true },
    { size: 20, top: "38%", left: "6%", opacity: 0.22, round: true },
];

const Banner = () => {
    return (
        <div
            className="relative flex h-[250px] w-full items-center justify-center overflow-hidden"
            style={{
                backgroundImage:
                    "linear-gradient(120deg, rgb(var(--accent-700) / 0.85), #241b4b 55%, #0f172a)",
            }}
        >
            {/* Profile / brand illustration */}
            <img
                src="/wall3.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="z-[30] mt-12 h-80 w-80 object-contain"
            />

            {/* Static decorative shapes */}
            {dots.map((d, i) => (
                <div
                    key={i}
                    className={`absolute ${d.round ? "rounded-full" : "rounded-md"} bg-purple-400`}
                    style={{
                        width: d.size,
                        height: d.size,
                        top: d.top,
                        left: d.left,
                        opacity: d.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default Banner;
