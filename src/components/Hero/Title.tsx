"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Full",
        },
        {
            text: 'Stack'
        },
        {
            text: "Developer.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
