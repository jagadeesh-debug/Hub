import React from "react";
export default function Work(){
    return (
        <div className="max-h-screen max-w-screen border border-black">
            <video className="h-auto w-full object-cover" controls>
                <source src="./src/assets/How_we_work.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}