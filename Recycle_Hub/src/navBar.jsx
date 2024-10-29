import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import SlotBook from "./book_the_slot";
import UserAcc from "./User_Account";
import Login from "./person_login";
import SignUp from "./person_signUp";
import Work from "./How_we_work";

export default function Nav() {
    const [menuopen, setmenuopen] = useState(false);
    const togglemenu = () => {
        setmenuopen(!menuopen);
    };

    return (
        <BrowserRouter>
            <div className="relative flex justify-between md:gap-x-12 max-w-screen bg-transparent ">
                <div className="h-24 w-16 md:h-32 md:w-24 md:mt-[-12px] rounded-full flex mt-4">
                    <Link to="/home"> 
                        <img src="./src/assets/LOGO.png" className="h-2/3 w-full rounded-full" alt="image" />
                    </Link>
                </div>

                <nav className="rounded-md  p-2 md:h-1/4 lg:h-12 text-xl w-5/6 justify-evenly hidden md:flex md:sticky" id="desktop-view">
                    <Link to="/home">
                        <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">Home</button>
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

                {/* toggling button for menu view in mobile */}
                <button onClick={togglemenu} className="md:hidden text-green-400 focus:outline-none">
                    {menuopen ? <i className="bx bx-x text-5xl relative"></i> : <i className="bx bx-menu text-5xl relative"></i>}
                </button>

                {/* Background overlay for mobile menu */}
                {menuopen && (
                    <div className="fixed inset-0 bg-black opacity-50 z-40 " onClick={togglemenu}></div>
                )}

                {/* Extra div added for the mobile menu */}
                <nav className={`${menuopen ? "flex" : "hidden"} md:hidden fixed top-24 right-0  px-12 h-1/2  bg-transparent z-50 w-screen justify-center transform trasnsition ease-in-out `} id="mobile-nav">
                    <div className="flex flex-col gap-y-6 p-4  bg-black opacity-75 w-full text-center  rounded-lg">
                        <Link to="/home" onClick={togglemenu}>
                            <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">Home</button>
                        </Link>
                        <Link to="/How_we_work" onClick={togglemenu}>
                            <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">How We Work</button>
                        </Link>
                        <Link to="/bys" onClick={togglemenu}>
                            <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">Book Your Slot</button>
                        </Link>
                        <Link to="/user-acc" onClick={togglemenu}>
                            <button className="text-green-400 rounded-md flex-grow text-center hover:bg-green-400 hover:text-black hover:cursor-pointer">Account</button>
                        </Link>
                        
                    </div>
                </nav>
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
