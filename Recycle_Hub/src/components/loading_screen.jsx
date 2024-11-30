import React from "react";
export default function LoadingScreen({isLoading, setIsLoading}) {

    return (
        <div className={` ${isLoading ?'flex':'hidden'}  justify-center items-center h-screen bg-gray-100`}>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-gray-800">Loading...</h1>
                <img src="/path/to/loading.svg" alt="Loading" className="animate-spin rounded-full h-32 w-32" />
            </div>
        </div>
    );
}   