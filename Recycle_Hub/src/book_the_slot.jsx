import React from "react";

export default function SlotBook() {
    return (
        <div className="h-screen max-w-screen flex flex-col  ">
            <div className="flex flex-col items-center justify-center w-full ">
                <h2 className="text-green-600 text-center text-xl md:w-1/2 md:text-3xl px-2 py-2 rounded-lg" style={{ fontFamily: "Anton, sans-serif" }}>
                    Select Your City
                </h2>
                <select className="w-1/2 mt-2 border-none rounded-md cursor-pointer bg-transparent text-md " style={{ fontFamily: "Anton, sans-serif" }}>
                    <option value="">Select an option</option>
                    <option value="option1" className="bg-transparent">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className=" w-full grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 place-items-center ">
                <div className=" h-5/6 w-2/3  md:w-2/3 md:h-2/3  lg:h-3/4 rounded-2xl cursor-pointer">
                <img src="./src/assets/Delhi.jpg" className="h-full w-full rounded-2xl "/>
                </div>
                <div className=" h-5/6  w-2/3 md:w-2/3 md:h-2/3  lg:h-3/4 rounded-2xl cursor-pointer">
                <img src="./src/assets/MAH.jpg" className="h-full w-full rounded-2xl"/>
                </div>
                <div className=" h-5/6 w-2/3  md:w-2/3 md:h-2/3  lg:h-3/4 rounded-2xl cursor-pointer">
                <img src="./src/assets/HYD.jpg" className="h-full w-full rounded-2xl"/>
                </div>
                <div className=" h-5/6 w-2/3  md:w-2/3 md:h-2/3  lg:h-3/4 rounded-2xl cursor-pointer">
                <img src="./src/assets/VIZAG.jpg" className="h-full w-full rounded-2xl"/>
                </div>
            </div>
        </div>
    );
}
