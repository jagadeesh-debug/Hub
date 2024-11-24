import './App.css';
import Nav from "./components/navBar.jsx";
import Login from "./components/person_login";
import Home from './components/home';
import SignUp from './components/person_signUp';
import SlotBook from './components/book_the_slot';
import User_acc from './components/User_Account';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from './Backend/firebaseconfig'; // Ensure this import is correct and auth is properly initialized
import { getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Landing from './components/landing.jsx';

function App() {
    const db = getFirestore(); // Ensure this line is correct and necessary
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setLoading(false); // Set loading to false after checking auth state
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while checking auth state
    }

    return (
        <BrowserRouter>
            {isLoggedIn && <Nav />} {/* Conditionally render Nav if logged in */}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                
                {/* Protected routes, only accessible if logged in */}
                {isLoggedIn ? (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/bys" element={<SlotBook />} />
                        <Route path="/user-acc" element={<User_acc />} />
                    </>
                ) : (
                    // Redirect to login if not logged in
                    <Route path="*" element={<Navigate to='/login' replace />} />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;