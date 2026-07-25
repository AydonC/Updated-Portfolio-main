import React, { useEffect, useState } from "react";

// Cycles through an array of phrases with a typing / deleting effect.
const TypewriterText = ({
    words = [],
    typingSpeed = 90,
    deletingSpeed = 45,
    pause = 1400,
    className = "",
}) => {
    const [index, setIndex] = useState(0); // which word
    const [subIndex, setSubIndex] = useState(0); // how many chars shown
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (words.length === 0) return;

        // Finished typing the current word -> pause, then start deleting.
        if (!deleting && subIndex === words[index].length) {
            const timeout = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(timeout);
        }

        // Finished deleting -> move to the next word.
        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
            deleting ? deletingSpeed : typingSpeed
        );
        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, pause]);

    return (
        <span className={className}>
            {words[index] ? words[index].substring(0, subIndex) : ""}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle">
                &nbsp;
            </span>
        </span>
    );
};

export default TypewriterText;
