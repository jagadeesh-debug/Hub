import React, { useEffect, useState } from "react";
import LoadingScreen from "./loading_screen";
import bg from "../assets/home.png";
import { db } from "../Backend/firebaseconfig";
import { doc, getDoc,getDocs,collection} from "firebase/firestore";
import Typewriter from "typewriter-effect";
import Footer from "./footer";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [totalPlastic, setTotalPlastic] = useState(0);
    const [showTags, setShowTags] = useState(false);
    const [users,setUsers] = useState(0);
    const [agents,setAgents] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "plasticSales", "totalPlastic");
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    setTotalPlastic(docSnap.data().quantity || 0);
                }
                const querySnapshot = await getDocs(collection(db, "users"));
                setUsers(querySnapshot.size);
                const querySnapshot1 = await getDocs(collection(db, "Agents"));
                setAgents(querySnapshot1.size);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setTimeout(() => setLoading(false), 3000);
            }
        };

        fetchData();
    }, []);

    const plasticTypes = [
        { name: "PETE", href: "https://en.wikipedia.org/wiki/Polyethylene_terephthalate" },
        { name: "HDPE", href: "https://en.wikipedia.org/wiki/High-density_polyethylene" },
        { name: "PVC", href: "https://en.wikipedia.org/wiki/Polyvinyl_chloride" },
        { name: "LDPE", href: "https://en.wikipedia.org/wiki/Low-density_polyethylene" },
        { name: "PP", href: "https://en.wikipedia.org/wiki/Polypropylene" },
        { name: "PS", href: "https://en.wikipedia.org/wiki/Polystyrene" },
        { name: "OTHER", href: "https://en.wikipedia.org/wiki/Plastic_recycling#Other" }
    ];

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
        <div className="flex min-h-screen flex-col gap-y-12 items-center lg:flex-row lg:justify-between px-4 py-2">
            <div className="lg:h-2/3 md:h-2/3  lg:w-2/3 rounded-md px-4 py-4 md:space-y-4 lg:space-y-8 lg:py-12 ">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-green-400 " style={{ fontFamily: 'Bagel Fat One, sans-serif' }}>
                <Typewriter
        options={{
          strings: ["Reduce Plastic Waste, Save the Planet 🌍"],
          autoStart: true,
          loop: true,
        }}
      />
                </h1>
                <p className="text-xl text-center" style={{ fontFamily: 'Inter' }}>
                    Total Waste Collected by us till Now is {totalPlastic} Kgs 😃
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-xl text-violet-500" style={{ fontFamily: "Inter" }}>
                        Learn More About different types and their usage
                    </p>
                    <p className="text-xl text-violet-500" style={{ fontFamily: "Inter" }}>
                        of Plastic Waste
                    </p>

                    <button 
                        className="w-1/4 shadow-md rounded-xl h-12 bg-green-400 mt-6 hover:bg-green-500 transition" 
                        onClick={() => setShowTags(!showTags)}
                    >
                        Types(click to view)
                    </button>
                </div>

                {showTags && (
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                        {plasticTypes.map((type, index) => (
                            <a
                                key={index}
                                href={type.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition"
                            >
                                {type.name}
                            </a>
                        ))}
                    </div>
                )}
              <div className="h-32 w-full  flex justify-center gap-x-12  ">
                <h2 className="text-xl text-center mt-4 h-28 w-28 content-center  shadow-md rounded-xl text-green-700" style={{ fontFamily: 'Inter' }}>{users}
                    <p className="text-md leading-none">Current users</p>
                </h2>
                <h2 className="text-xl text-center mt-4 h-28 w-28 content-center  shadow-md rounded-xl text-green-900" style={{ fontFamily: 'Inter' }}>{agents}
                    <p className="text-md leading-none">agents accross Nation</p>
                </h2>
                </div>
            </div>

            <div className="md:w-2/3 lg:w-1/2 lg:h-1/ lg:mt-0 h-1/3 rounded-md md:mt-12 flex justify-center items-center md:h-1/3">
                <img src={bg} alt="bg" className="w-2/3" />
            </div>
        </div>
            <Footer/>
            </>
    );
}
