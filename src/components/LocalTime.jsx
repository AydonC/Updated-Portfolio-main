import React, { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";

// Live local time in Cape Town — a small human touch that shows there's a real
// person (in a real timezone) behind the site. Updates every 30s.
const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Johannesburg", // SAST — same as Cape Town
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(new Date());

const LocalTime = () => {
    const [time, setTime] = useState(fmt);

    useEffect(() => {
        const id = setInterval(() => setTime(fmt()), 30_000);
        return () => clearInterval(id);
    }, []);

    return (
        <span className="flex items-center" title="My local time (Cape Town)">
            <LuClock className="mr-1.5 h-4 w-4 text-purple-400" />
            <span className="font-code tabular-nums">{time}</span>
            <span className="ml-1 text-gray-500">local</span>
        </span>
    );
};

export default LocalTime;
