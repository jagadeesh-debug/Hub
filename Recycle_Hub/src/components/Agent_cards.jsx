import React from "react";
import { useState, useEffect } from "react";

export default function Agent_cards() {
return (
    <div className="border justify-center flex  ">
        <div className="flex  md:w-1/3 border border-black px-3 ">
            <div className="aspect-square ">
                <img
                    src="./src/assets/delhi.jpg"
                    alt="agent1"
                    className="rounded-full aspect-square h-2/3 md:h-4/5 mt-3 "
                />
            </div>
            <div className="flex flex-col justify-evenly md:px-4 md:py-2 text-sm md:text-md">
                <h1>Agent Name</h1>
                <h2>City</h2>
                <h3>Mobile</h3>
                <h4>Email</h4>
                <div className="flex gap-x-4 w-44  md:w-80   ">
                    <button className="border border-black flex rounded-md hover:bg-green-400 w-2/3 justify-center">Book slot</button>
                    <button className="border border-black flex rounded-md hover:bg-green-400 w-2/3 justify-center">View Profile</button>
                </div>
            </div>
        </div>
    </div>
);
}
