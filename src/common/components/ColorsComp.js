import React from "react";

export const ColorsComp = () => {
    return <div className="bg-primary p-5">
        <p className="text-black "> Black</p>
        <p className="text-white "> white</p>
        <p className="text-red-500"> red</p>
        <p className="bg-secondary-800"> red</p>
        <p className="underline decoration-red-500 text-white"> underline</p>
        <div className="bg-secondary p-4 border-green-200">
            <p className="bg-secondary-800"> content</p>
        </div>
        <div className="p-4 border-red-900 divide-y divide-red-500">
            <div className=" p-4">1 </div>
            <div className=" p-4"> 2</div>
            <div className=" p-4">3 </div>
            <div className=" p-4">4 </div>
        </div>
        <div className="p-2">
            <button className="outline outline-red-500"> Submit </button>
            <button className="outline outline-red-500"> Save </button>
        </div>

        <div className="bg-secondary">
            <div className="p-2 flex justify-around">

                <button className="outline outline-red-500"> Save </button>
                <button className="shadow-lg bg-cyan-500 shadow-gray-500 "> Submit </button>
                <button className="shadow-lg bg-cyan-500 shadow-purple-500 "> Next </button>
            </div>
        </div>
        <div className="bg-secondary p-2 flex justify-around mt-8">
            <div className="bg-[#1112] p-2"> Card 1 </div>
            <div className="bg-[#2212] p-2"> Card 2 </div>
        </div>
    </div >;
};
