import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuPalette, LuCheck } from "react-icons/lu";

// Accent themes. `swatch` is only for the picker dot; the actual site colours
// come from the CSS variables in index.css keyed on [data-theme].
const THEMES = [
    { id: "violet", name: "Violet", swatch: "#a855f7" },
    { id: "indigo", name: "Indigo", swatch: "#6366f1" },
    { id: "sky", name: "Sky", swatch: "#0ea5e9" },
    { id: "emerald", name: "Emerald", swatch: "#10b981" },
    { id: "amber", name: "Amber", swatch: "#f59e0b" },
    { id: "rose", name: "Rose", swatch: "#f43f5e" },
];

const getInitialTheme = () => {
    try {
        return localStorage.getItem("theme") || "violet";
    } catch {
        return "violet";
    }
};

const ThemeSwitcher = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);
    const ref = useRef(null);

    // Apply + persist whenever the theme changes.
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch {
            /* ignore */
        }
    }, [theme]);

    // Close on outside click / Escape.
    useEffect(() => {
        if (!open) return;
        const onClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div ref={ref} className="fixed right-4 top-4 z-[95]">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Change colour theme"
                aria-expanded={open}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/30 bg-gray-900/80 text-purple-200 shadow-lg shadow-black/40 backdrop-blur transition-colors hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
                <LuPalette className="h-5 w-5" />
            </button>

            {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-52 rounded-2xl border border-gray-800 bg-gray-900/95 p-3 shadow-xl shadow-black/50 backdrop-blur"
                    >
                        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Accent Theme
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            {THEMES.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setTheme(t.id)}
                                    aria-label={t.name}
                                    className={`group flex flex-col items-center gap-1 rounded-xl border p-2 transition-colors ${
                                        theme === t.id
                                            ? "border-purple-500 bg-purple-600/10"
                                            : "border-transparent hover:border-gray-700 hover:bg-gray-800/60"
                                    }`}
                                >
                                    <span
                                        className="flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-white/10"
                                        style={{ backgroundColor: t.swatch }}
                                    >
                                        {theme === t.id && (
                                            <LuCheck className="h-4 w-4 text-white" strokeWidth={3} />
                                        )}
                                    </span>
                                    <span className="text-[11px] font-medium text-gray-300">
                                        {t.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
