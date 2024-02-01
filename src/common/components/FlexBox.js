import React from "react";

const FlexBox = () => {
    return <div>FlexBox
        <div className="flex items-center gap-4 justify-center h-72 w-full bg-gray-300 ">
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">1</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">2</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">3</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">4</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">5</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">6</div>
        </div>

        <div className="flex flex-col items-center gap-4 justify-center h-72 w-full bg-gray-300 mt-3">
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">1</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">2</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">3</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">4</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">5</div>
            <div className="w-40 h-20 bg-yellow-200 p-12 border border-blue-300">6</div>
        </div>
    </div>;
};

export default FlexBox;
