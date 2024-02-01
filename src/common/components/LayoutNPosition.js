import React from "react";

const LayoutNPosition = () => {
    return <div className="h-50 overflow-y-auto">Layout N Position
        <div className="relative w-90 h-12 bg-red-200">
            <p> parent</p>
            <div className="absolute bottom-0 right-0 bg-red-800">
                <p>Absolute Child</p>
            </div>
        </div>
        <p>Top left</p>
        <div className="relative w-90 h-60 w-60 bg-red-200">
            <p> parent</p>
            <div className="absolute top-0 left-100 h-16 w-16  bg-yellow-200">
                <p>Absolute Child</p>
            </div>
        </div>
        <p>Bottom left</p>
        <div className="relative w-90 h-60 w-60 bg-red-200">
            <p> parent</p>
            <div className="absolute bottom-0 left-0  h-16 w-16  bg-yellow-200">
                <p>Absolute Child</p>
            </div>
        </div>
        <p>Top Right</p>
        <div className="relative w-90 h-60 w-60 bg-red-200">
            <p> parent</p>
            <div className="absolute top-0 right-0  h-16 w-16  bg-yellow-200">
                <p>Absolute Child</p>
            </div>
        </div>
        <p>Bottom Right</p>
        <div className="relative w-90 h-60 w-60 bg-red-200">
            <p> parent</p>
            <div className="absolute bottom-0 right-0  h-16 w-16  bg-yellow-200">
                <p>Absolute Child</p>
            </div>
        </div>
        <p>z-index</p>
        <div className="relative h-36">
            <div className="absolute left-10 w-24 h-24 bg-blue-200 z-40">1</div>
            <div className="absolute left-20 w-24 h-24 bg-blue-300 ">2</div>
            <div className="absolute left-40 w-24 h-24 bg-blue-400">3</div>
            <div className="absolute left-60 w-24 h-24 bg-blue-500 z-0">4</div>
            <div className="absolute left-80 w-24 h-24 bg-blue-600 ">5</div>
        </div>

    </div>;
};

export default LayoutNPosition;
