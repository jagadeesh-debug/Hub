import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import delhi from "../assets/Delhi.jpg";
import hyderabad from "../assets/HYD.jpg";
import maharashtra from "../assets/MAH.jpg";
import vizag from "../assets/VIZAG.jpg";

export default function SlotBook() {
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const db = getFirestore();
        const fetchCities = async () => {
            const docRef = doc(db, "Cities", "Locations");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const fetchedCities = docSnap.data().Cities_Array || [];
                setCities(fetchedCities);
            } else {
                console.log("No such document!");
            }
        };
        fetchCities();
    }, []);

    const goToAgentsPage = (city) => {
        if (city) {
            navigate("/agents", { state: { city } });
        } else {
            console.log("City not selected");
        }
    };

    const handleCitySelect = (event) => {
        const selectedCity = event.target.value;
        goToAgentsPage(selectedCity);
    };

    return (
        <div className="min-h-screen max-w-screen flex flex-col md:mt-5 transition-colors bg-gradient-to-l from-gray-200 to-transparent">
            <div className="flex flex-col items-center justify-center w-full">
                <h2
                    className="text-green-600 text-center text-xl md:w-1/2 md:text-3xl px-2 py-2 rounded-lg "
                    style={{ fontFamily: "Anton, sans-serif" }}
                >
                    Select Your City
                </h2>
                <select
                    className="w-1/2 mt-2 border  border-green-400 shadow-green-300 shadow-sm focus-none rounded-md cursor-pointer bg-transparent text-md"
                    style={{ fontFamily: "Anton, sans-serif" }}
                    onChange={handleCitySelect}
                >
                    <option value="">Select an option</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city} className="text-black text-xl">
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 place-items-center mt-5">
                <div
                    className="h-5/6 w-2/3 md:w-2/3 md:h-2/3 lg:h-3/4 rounded-2xl cursor-pointer"
                    onClick={() => goToAgentsPage("Delhi")}
                >
                    <img src={delhi} className="h-full w-full rounded-2xl" />
                </div>
                <div
                    className="h-5/6 w-2/3 md:w-2/3 md:h-2/3 lg:h-3/4 rounded-2xl cursor-pointer"
                    onClick={() => goToAgentsPage("Hyderabad")}
                >
                    <img src={hyderabad} className="h-full w-full rounded-2xl" />
                </div>
                <div
                    className="h-5/6 w-2/3 md:w-2/3 md:h-2/3 lg:h-3/4 rounded-2xl cursor-pointer"
                    onClick={() => goToAgentsPage("visakhapatnam")}
                >
                    <img src={vizag} className="h-full w-full rounded-2xl" />
                </div>
                <div
                    className="h-5/6 w-2/3 md:w-2/3 md:h-2/3 lg:h-3/4 rounded-2xl cursor-pointer"
                    onClick={() => goToAgentsPage("Maharashtra")}
                >
                    <img src={maharashtra} className="h-full w-full rounded-2xl" />
                </div>
            </div>
        </div>
    );
}
