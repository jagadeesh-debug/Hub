import React from "react";
import { useState,useRef } from "react";

export default function SignUp(){
    return (
        <div className="flex h-screen justify-center items-center  ">
        <div className="flex flex-col md:w-1/2 px-4 py-4 space-y-8 items-center">
            <h1 className="  text-2xl md:text-5xl text-green-400  " style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>Sign Up Here</h1>
            <div className="w-full md:w-1/2 flex relative">
                <input id="email" type="email" placeholder="mail" className="border border-black w-full md:px-4 py-2  rounded-md text-center md:text-start" />
                <i className='bx bx-user absolute top-2 right-1 text-2xl font-bold text-green-400'></i></div>
            <div className="w-full md:w-1/2 flex relative">
            <input id="mobile" type="tel" placeholder="mobile number" className="border border-black md:px-4 py-2 w-full  text-center md:text-start rounded-md"/>
            <i className='bx bx-dialpad text-green-400 absolute top-1 font-bold right-2 text-2xl'></i>
            </div>
            <input id="signup_password" type="password" placeholder="password" className="border border-black md:px-4 py-2 w-full md:w-1/2 text-center md:text-start rounded-md" />
            <button id="signUp" className="text-md w-1/2 md:text-xl bg-green-400  md:w-1/3 lg:w-1/6  rounded-md p-1 font-bold">Sign Up</button>
            
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
    )
}