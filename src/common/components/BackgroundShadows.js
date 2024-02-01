import React from "react";

const BackgroundShadows = () => {
    return <div>Background n Shadows
        <div className="h-60 w-[1000px] bg-no-repeat bg-cover bg-center" style={{
            backgroundImage: "url(https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg)"
        }}>

        </div>
        <div className="w-96 mt-5 ml4 p3 shadow-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
            deleniti iusto delectus alias natus quam dolor explicabo quas eius!
        </div>
        <div className="w-96 mt-5 ml4 p3 shadow-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
            deleniti iusto delectus alias natus quam dolor explicabo quas eius!
        </div>
        <div className="w-96 mt-5 ml4 p3 shadow-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
            deleniti iusto delectus alias natus quam dolor explicabo quas eius!
        </div>
        <div className="w-96 mt-5 ml4 p3 shadow-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
            deleniti iusto delectus alias natus quam dolor explicabo quas eius!
        </div>
        <div className="w-96 mt-5 ml4 p3 shadow-2xl shadow-blue-500/50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
            deleniti iusto delectus alias natus quam dolor explicabo quas eius!
        </div>
        <div className="w-96 mt-5 ml4 p3 shadow-2xl shadow-red-500/20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
            deleniti iusto delectus alias natus quam dolor explicabo quas eius!
        </div>
    </div>;
};
export default BackgroundShadows;
