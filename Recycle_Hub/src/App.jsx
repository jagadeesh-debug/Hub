import './App.css';
import Nav from "./components/navBar.jsx";
import Login from "./components/person_login";
import Home from './components/home';
import SignUp from './components/person_signUp';
import SlotBook from './components/book_the_slot';
import User_acc from './components/User_Account';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from './Backend/firebaseconfig'; 
import { useState, useEffect } from 'react';
import Landing from './components/landing.jsx';
import Person_or_Agent from './components/Person_or_Agent.login.jsx';
import LoadingScreen from './components/loading_screen.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Wait for 3 seconds before checking auth state
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
                setIsLoading(false);
            });

            return () => unsubscribe();
        }, 3000); // Set a delay of 3 seconds

        return () => clearTimeout(timeout); // Clean up the timeout on unmount
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
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
