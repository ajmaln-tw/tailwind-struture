import React, { useState } from "react";

const DarkMode = () => {
    const [checked, setChecked] = useState(false);
    const handleDarkMode = (e) => {
        const val = e.target.checked;
        setChecked(prev => !prev);
        if (val) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return <div>DarkMode

        <div
            className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
        >
            <h3
                className="text-slate-900 dark:text-white text-base font-medium tracking-tight"
            >
                Writes Upside-Down
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including
                upside-down. It even works in outer space.
            </p>
        </div>
        <div
            className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in"
        >
            <input
                type="checkbox"
                name="toggle"
                id="toggle"
                checked={checked}
                onChange={handleDarkMode}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
        </div>
    </div>;
};

export default DarkMode;
