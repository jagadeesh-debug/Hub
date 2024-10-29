import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import SlotBook from "./book_the_slot";
import UserAcc from "./User_Account";
import Login from "./person_login";
import SignUp from "./person_signUp";
import Work from "./How_we_work";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <BrowserRouter>
            <div className="flex justify-between items-center md:flex-row flex-col max-w-screen p-4">
                <div className="h-24 w-16 md:h-32 md:w-24 rounded-full">
                    <Link to="/home"> 
                        <img src="./src/assets/LOGO.png" className="h-2/3 w-full rounded-full" alt="logo" />
                    </Link>
                </div>

                {/* Toggle button for mobile view */}
                <button onClick={toggleMenu} className="md:hidden text-green-400 focus:outline-none">
                    {isMenuOpen ? "Close" : "Menu"}
                </button>

                {/* Navigation menu */}
                <nav className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-x-4 bg-gray-100 p-2 rounded-md w-full md:w-auto text-center`}>
                    <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black">Home</button>
                    </Link>
                    <Link to="/How_we_work" onClick={() => setIsMenuOpen(false)}>
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black">How We Work</button>
                    </Link>
                    <Link to="/bys" onClick={() => setIsMenuOpen(false)}>
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black">Book Your Slot</button>
                    </Link>
                    <Link to="/user-acc" onClick={() => setIsMenuOpen(false)}>
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black">Account</button>
                    </Link>
                </nav>

                <Link to="Login" onClick={() => setIsMenuOpen(false)}>
                    <button className="bg-green-400 rounded-md w-1/3 text-sm md:text-xl md:w-full hover:bg-green-300 hidden md:block">Get Started</button>
                </Link>
            </div>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/How_we_work" element={<Work />} />
                <Route path="/bys" element={<SlotBook />} />
                <Route path="/user-acc" element={<UserAcc />} />
                <Route path="Login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
