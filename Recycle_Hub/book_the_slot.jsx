import React from "react";

export default function SlotBook() {
    return (
        <div className="h-screen w-screen flex flex-col"> {/* Use flex to align children vertically */}
            <div className="h-1/6 w-full flex flex-col items-center border border-black">
                <h2 className="text-green-400 text-xl md:w-1/2 md:text-3xl px-2 py-2 rounded-lg" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>
                    Select Your City
                </h2>
                <select className="w-1/2 mt-12" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="h-5/6 w-full border border-black mt-2"> {/* Changed h-3/4 to h-5/6 for clarity */}
                {/* Content can be added here */}
            </div>
        </div>
    );
}
