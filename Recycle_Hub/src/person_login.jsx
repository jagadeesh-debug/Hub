
import React from "react";
import SignUp from "./person_signUp";
import {  Link } from "react-router-dom";

export default function Login() {
    return (
        <div className=" flex justify-center items-center md:justify-center md:items-center   ">
            <div className="flex flex-col  md:w-1/2 px-4 py-4 space-y-8 items-center">
                <h1 className="text-2xl md:text-5xl text-green-400" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>Login Here</h1>
                <div className="w-full md:w-2/3 xl:w-1/2 flex relative">
                    <input id="email" type="email" placeholder="bharamaramba@gmail.com" className="border border-black w-full pr-10 md:pr-10 px-4 py-2 rounded-md" />
                    <i className='bx bx-user absolute top-1 right-2 text-2xl font-bold text-green-400'></i></div>
                <input id="password" type="password" placeholder="Bhrama@0" className="border border-black w-full md:px-4 py-2 md:w-2/3 xl:w-1/2 rounded-md" />
                <button id="login" className="text-xl bg-green-400  md:w-1/4 rounded-md p-1 font-bold">Log In</button>
                <div className="flex justify-between md:justify-between w-full md:w-2/3 xl:w-1/2">
                    <a className="text-sm xl:text-md" href="#">Forgot Password</a>
                    <Link to="/signup" className="text-sm xl:text-md">New User?
                    </Link>
                </div>
                <div className="w-full md:w-1/2 flex items-center">
                    <hr className="border border-black flex-grow"></hr>
                    <h2 className="text-md px-2">Or</h2>
                    <hr className="border border-black flex-grow"></hr>
                </div>
                <div className="flex space-x-4 justify-center w-1/2">
                    <button className="text-center px-4 py-2 rounded-full text-3xl">
                        <i
                            className="bx bxl-google"
                            style={{
                                background: 'linear-gradient(-220deg, #EA4335 30%, #FBBC05 50%, #4285F4 66%, #34A853 55%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        ></i>
                    </button>
                    <button className="text-center px-4 py-2 rounded-full text-3xl">
                        <i className='bx bxl-facebook text-blue-800'></i>
                    </button>
                    <button className="text-center px-4 py-2 rounded-full text-3xl">
                        <i className='bx bxl-twitter text-blue-400'></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
