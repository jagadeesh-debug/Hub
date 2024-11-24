import React from "react";
import { useState, useRef,useEffect } from "react";
import {db, auth} from "../Backend/firebaseconfig";
import { getDoc, doc, setDoc, getFirestore } from "firebase/firestore";
export default function User_acc() {
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const db = getFirestore(); 
   
    const handleEditName= async () => {
        const newName = prompt("Enter new name:");
        if (newName) {
            setName(newName);
            const userDoc = doc(db, "users", auth.currentUser.uid);
            await setDoc(userDoc, { name: newName }, { merge: true });
        }
    };

    const handleEditMobile = async () => {
        const newMobile = prompt("Enter new mobile number:");
        if (newMobile) {
            setMobile(newMobile);
            const userDoc = doc(db, "users", auth.currentUser.uid);
            await setDoc(userDoc, { mobile: newMobile }, { merge: true });
        }
    };
    const handleEditEmail = async ()=>{
        const newmail = prompt("Enter new mail");
        if(newmail){
            setEmail(newmail);
            const userDoc = doc(db, "users", auth.currentUser.uid);
            await setDoc(userDoc, { email: newmail }, { merge: true }); 
        }
    };
    const handleEditAddress = async ()=>{
        const newAddress = prompt("Enter new address");
        if(newAddress){
            setAddress(newAddress);
            const userDoc = doc(db, "users", auth.currentUser.uid);
            await setDoc(userDoc, { address: newAddress }, { merge: true });
        }
    };
    useEffect(() => {
        const fetchUserData = async () => {
            const userDoc = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(userDoc);
            if (docSnap.exists()) {
                setName(docSnap.data().name);
                setMobile(docSnap.data().mobile);
                setEmail(docSnap.data().email);
                setAddress(docSnap.data().address); 
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="h-screen  flex flex-col items-center ">
            <div className="= h-1/4 w-full md:w-1/2  md:mt-4 flex  md:justify-evenly">
                    <div className=" w-2/3 md:w-1/2 lg:w-1/3 flex  justify-center items-center">
                        <img className="border border-black aspect-square  rounded-full  w-2/3 md:w-2/3"  src="./src/assets/sin.jpg"/></div>
                    <div className="= w-5/6 md:w-1/2 flex flex-col items-center justify-center">
                    <div className="  text-orange-400 md:text-xl lg:text-2xl" id="userAccName" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>Hello {name}</div>
                    <div className="  text-black-400 md:text-md lg:text-xl" id="userName" style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>{name}</div>
                    <div className="flex = mt-2 w-full h-1/3  items-center justify-evenly">
                        <div className="flex flex-col items-center cursor-pointer">
                            <i class='bx bxs-package text-xl md:text-xl lg:text-3xl '></i>
                            <h2 className="text-sm ">Orders</h2>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
                            <i class='bx bxs-wallet-alt text-xl md:text-xl lg:text-3xl'></i>
                            <h2 className="text-sm ">Wallet</h2>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
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
                        <p className="text-xl font-semibold" id="User_name">{name}</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md " onClick={handleEditName}><i class='bx bx-edit' id="edit" ></i></button>
                </div>
                <div className="flex  h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h2 className="text-xl " style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Mobile</h2>
                        <p className="text-xl font-semibold">{mobile}</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md" onClick={handleEditMobile}><i class='bx bx-edit' ></i></button>
                </div>
                <div className="flex  h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2 ">
                        <h2 className="text-xl" style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Email</h2>
                        <p className="text-xl font-semibold">{email}</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md " onClick={handleEditEmail}><i class='bx bx-edit' ></i></button>
                </div>
                <div className="flex  h-1/6 justify-around items-center" id="details">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h2 className="text-xl " style={{ fontFamily: 'Bagel Fat One, sans-serif' }} >Address</h2>
                        <p className="text-xl font-semibold">{address}</p>
                    </div>
                    <button className="text-xl italic bg-green-400 text-black w-1/4 h-fit rounded-md " onClick={handleEditAddress}><i class='bx bx-edit' ></i></button>
                </div>

            </div>
        </div>

    )
}