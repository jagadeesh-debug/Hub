import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import SlotBook from "./book_the_slot";
import UserAcc from "./User_Account";
import Login from "./person_login";
import SignUp from "./person_signUp";
import Work from "./How_we_work";

export default function Nav() {
    return (
        <BrowserRouter>
            <div className="flex justify-between gap-x-12 max-w-screen">
                <div className="h-24 w-16 md:h-32 md:w-24 mt-[-12px]  rounded-full">
                    <Link to="/home"> 
                <img src="./src/assets/LOGO.png" className="h-2/3 w-full rounded-full " alt="image" />
                </Link></div>
            
                <nav className="rounded-md bg-gray-100 p-2  md:h-1/4  lg:h-12 text-xl w-5/6 justify-evenly hidden md:flex md:sticky">
                    <Link to="/home">
                        <button className="text-green-400 rounded-md flex-grow text-center  hover:bg-green-400 hover:text-black hover:cursor-pointer">Home</button>
                    </Link>
                    <Link to="/How_we_work">
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">How We Work</button>
                    </Link>
                    <Link to="/bys">
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">Book Your Slot</button>
                    </Link>
                    <Link to="/user-acc">
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">Account</button>
                    </Link>
                </nav>
                <Link to="Login">
                <button className="bg-green-400 rounded-md w-1/3 text-sm md:text-xl md:w-full hover:bg-green-300 hidden md:block">Get Started</button>
                </Link>
            </div>
            
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/How_we_work" element={<Work />} />
                <Route path="/bys" element={<SlotBook />} />
                <Route path="/user-acc" element={<UserAcc />} />
                <Route path="Login" element={<Login />}/>
                <Route path="signup" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    );
}
