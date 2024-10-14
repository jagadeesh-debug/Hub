import React from "react";
                

export default function Home(){
    return (
        <div className="flex flex-col h-screen md:flex-row justify-between  mt-12 md:mt-32">
            <div className="text border-black border lg:justify-center  h-1/2 md:w-1/3 rounded-md px-4 py-4 space-y-8 md:space-y-4 lg:space-y-8 lg:py-12">
            <h1 className="text-3xl md:text-3xl font-bold text-balance md:text-wrap text-start" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>A second life to almost everything</h1>
            <p className="text-lg lg:text-md text-wrap text-start md:py-2 lg:py-4 italic font-medium">We collect from homes, councils, and businesses, connecting items with our reuse and recycling partners.</p>

            <div className="h-1/4 w-full gap-x-2 flex  ">
            <button className="w-1/6 h-12 border border-black flex-grow hover:cursor rounded-lg hover:bg-green-400 hover:text-black font-medium">User</button>
            <button className="w-1/6 h-12 border border-black flex-grow hover:cursor rounded-lg hover:bg-green-400 hover:text-black font-medium">Agent</button>
            </div>
            </div>
            <div className=" h-1/2 md:w-1/2 border border-black rounded-md mt-2 flex justify-center items-center bg-gray-300">
            <video className="h-full  rounded-md " controls >
                <source src="src/recycle_hub.mp4" type="video/mp4"/>
            </video>
            </div>
        </div>
    )
}