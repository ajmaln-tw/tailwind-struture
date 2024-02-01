import React from "react";

const HeightAndWidth = () => {
    return <>
        <div>
            <div>
                <div className="bg-black text-white w-100">
                    Width Full
                </div>
                <div className="bg-black text-white w-half">
                    Width 50%
                </div>
                <div className="bg-black text-white w-1/4">
                    Width 1/4
                </div>
                <div className="bg-black text-white w-1/2">
                    Width 1/2
                </div>
                <div className="bg-black text-white w-1/3">
                    Width 1/3
                </div>
                {/* Width if the viewport */}
                <div className="bg-blue-600 text-white w-screen">
                    Width Full viewport
                </div>
            </div>

        </div>;
        <div className="flex items-end">
            <div className="bg-orange-500 h-20"> item 1</div>
            <div className="bg-orange-500 h-40"> item 2</div>
            <div className="bg-orange-500 h-96"> item 3</div>

        </div>
    </>;
};

export default HeightAndWidth;
