import './App.css';
import Nav from "./components/navBar.jsx";
import Login from "./components/person_login";
import Home from './components/home';
import SignUp from './components/person_signUp';
import SlotBook from './components/book_the_slot';
import User_acc from './components/User_Account';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { auth } from './Backend/firebaseconfig'; // Ensure this import is correct and auth is properly initialized
import { getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Landing from './components/landing.jsx';
import Person_or_Agent from './components/Person_or_Agent.login.jsx';
import LoadingScreen from './components/loading_screen.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setIsLoading(false); // Set loading to false after checking auth state
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <LoadingScreen />; // Show a loading screen while checking auth state
    }

    return (
        <BrowserRouter>
            {isLoggedIn && <Nav />} {/* Conditionally render Nav if logged in */}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/user_agent" element={<Person_or_Agent />} />
                {isLoggedIn ? (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/bys" element={<SlotBook />} />
                        <Route path="/user-acc" element={<User_acc />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to='/login' replace />} />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;