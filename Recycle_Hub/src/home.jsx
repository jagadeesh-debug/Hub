import React from "react";
                

export default function Home(){
    return (
        <div className="flex justify-between h-screen mt-32">
            <div className="text border-black border  h-1/2 w-1/3 rounded-md px-4 py-12">
            <h1 className="text-4xl font-bold text-wrap text-start" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>A second life to almost everything</h1>
            <p className="text-md text-wrap text-start py-8 italic font-medium">We collect from homes, councils, and businesses, connecting items with our reuse and recycling partners.</p>

            <div className="h-1/4 w-full gap-x-2 flex  mt-12  ">
            <button className="w-1/6 h-12 border border-black flex-grow hover:cursor rounded-lg hover:bg-green-400 hover:text-black font-medium">Individual</button>
            <button className="w-1/6 h-12 border border-black flex-grow hover:cursor rounded-lg hover:bg-green-400 hover:text-black font-medium">Agent</button>
            </div>
            </div>
            <div className="gif  border-black border h-1/2 w-1/2 rounded-md">
            </div>
        </div>
    )
}