import React from "react";

export default function Nav() {
    return (
        <div className="flex justify-between gap-x-12 ">
            <nav className="flex rounded-md bg-gray-100 p-2 h-12 text-xl w-screen gap-x-12">
                <button className="text-green-400  rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor">Home</button>
                <button className="text-green-400  rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor">How We Work</button>
                <button className="text-green-400  rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor">Book Your Slot</button>
                <button className="text-green-400  rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor">Account</button>
            </nav>
            <button className="bg-green-400 rounded-md w-1/4 hover:bg-green-300">Get Started</button>
        </div>
    );
}
