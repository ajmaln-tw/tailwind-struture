import React from "react";

const Typography = () => {
    return <div className="p-4">
        <div>
            <h2>Typography</h2>
        </div>
        <div className="font-sans">
            Tailwind : Font Sans
        </div>
        <div className="font-serif">
            Tailwind : Font Sans
        </div>
        <div className="font-mono">
            Tailwind : Font Mono
        </div>
        <div className="flex">
            <div className="mt-1 p-1">
                <div className="text-xs">
                    Extra Small
                </div>
                <div className="text-sm">
                    Small
                </div>
                <div className="text-sm">
                    Normal
                </div>
                <div className="text-lg">
                    Large
                </div>
                <div className="text-xl">
                    Extra Large
                </div>
                <div className="text-2xl">
                    Extra Large x2
                </div>
            </div>
            <div className="mt-1 p-1">
                <div className="font-light">
                    Light
                </div>
                <div className="font-normal">
                    Normal
                </div>
                <div className="font-medium">
                    Medium
                </div>
                <div className="font-semibold">
                    Semi Bold
                </div>
                <div className="font-bold">
                    Bold
                </div>
            </div>
            <div className="mt-1 p-1">
                <div className="tracking-light">
                    Letter spacing Light
                </div>
                <div className="tracking-normal">
                    Letter spacing Normal
                </div>
                <div className="tracking-wide">
                    Letter spacing Wide
                </div>
            </div>
        </div>
        <div className="mt-1 p-1">
            <div className="text-left">
                Text Left
            </div>
            <div className="text-right">
                Text Right
            </div>
            <div className="text-center">
                Text Center
            </div>
        </div>
    </div>;
};

export default Typography;
