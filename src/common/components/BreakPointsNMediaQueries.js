import React, { useState, useEffect } from "react";

const BreakPointsNMediaQueries = () => {
    // Initialize the state to store the width
    const [width, setWidth] = useState(window.innerWidth);

    // Effect for updating the width on window resize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Set up the event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures this runs only once at mount

    return (
        <div>BreakPoints & MediaQueries
            <div className="bg-black text-white h-96 sm:bg-green-800 md:bg-orange-200 lg:bg-yellow-300
            xl:bg-red-400 2xl:bg-black">
                {`width: ${width}`}
            </div>
        </div>
    );
};

export default BreakPointsNMediaQueries;
