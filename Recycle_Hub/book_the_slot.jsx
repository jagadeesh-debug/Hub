import React from "react";

export default function SlotBook() {
    return (
        <div className="h-full max-h-screen max-w-screen flex flex-col">
            <div className="flex flex-col items-center justify-center w-full border border-black mt-2">
                <h2 className="text-green-400 text-xl md:w-1/2 md:text-3xl px-2 py-2 rounded-lg" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>
                    Select Your City
                </h2>
                <select className="w-1/2 mt-2  " style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="border border-black h-full mt w-full grid grid-cols-2 gap-2">
                <div className="border border-red-500 ">1</div>
                <div className="border border-red-500 ">2</div>
                <div className="border border-red-500 ">3</div>
                <div className="border border-red-500 ">4</div>
            </div>
        </div>
    );
}
