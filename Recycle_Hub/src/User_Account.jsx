import React from "react";
import { useState, useRef } from "react";

export default function User_acc() {
    return (
        <div className="h-screen  flex flex-col items-center ">
            <div className="= h-1/4 w-full md:w-1/2  mt-4 flex  md:justify-evenly">
                <div className=" w-2/3    md:w-1/2 lg:w-1/3 flex  justify-center items-center">
                    <img className="border border-black aspect-square  rounded-full md:m-3 lg:m-4  "  src="./src/assets/rec.jpg"/></div>
                <div className="= w-5/6 md:w-1/2 flex flex-col items-center justify-center">
                    <div className="  text-orange-400 md:text-xl lg:text-2xl" id="userAccName" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>Hello Ramanujan010</div>
                    <div className="  text-black-400 md:text-md lg:text-xl" id="userName" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>Ramanujan</div>
                    <div className="flex = mt-2 w-full h-1/3  items-center justify-evenly">
                        <div className="flex flex-col items-center">
                            <i class='bx bxs-package text-xl md:text-xl lg:text-3xl '></i>
                            <h2 className="text-sm ">Orders</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <i class='bx bxs-wallet-alt text-xl md:text-xl lg:text-3xl'></i>
                            <h2 className="text-sm ">Wallet</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <i class='bx bx-qr text-xl md:text-xl lg:text-3xl '></i>
                            <h2 className="text-sm ">scanner</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className="h-3/4 w-3/4 md:w-1/2  mt-2 flex flex-col gap-y-2">
                <div className="flex  w-full h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2 ">
                        <h2 className="text-xl " style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Name</h2>
                        <p className="text-xl font-semibold">Jagadeesh</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md "><i class='bx bx-edit' ></i></button>
                </div>
                <div className="flex  h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h2 className="text-xl " style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Mobile</h2>
                        <p className="text-xl font-semibold">7093608328</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md "><i class='bx bx-edit' ></i></button>
                </div>
                <div className="flex  h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2 ">
                        <h2 className="text-xl" style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Email</h2>
                        <p className="text-xl font-semibold">Idiot@gmail.com</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md "><i class='bx bx-edit' ></i></button>
                </div>
                <div className="flex  h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h2 className="text-xl " style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Address</h2>
                        <p className="text-xl font-semibold">flat-no:143</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md "><i class='bx bx-edit' ></i></button>
                </div>

            </div>
        </div>

    )
}