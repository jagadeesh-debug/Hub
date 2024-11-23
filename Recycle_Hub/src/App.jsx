import './App.css'
import Nav from "./components/navBar.jsx";
import Login from "./components/person_login";
import Home from './components/home'
import SignUp from './components/person_signUp'
import SlotBook from './components/book_the_slot'
import User_acc from './components/User_Account'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { db, auth } from './Backend/firebaseconfig';
import { Navigate } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Landing from './components/landing.jsx';

function App() {
    const db = getFirestore();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="landing" element={<Landing />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to='/home' />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/bys" element={isLoggedIn ? <SlotBook /> : <Navigate to='/login' />} />
                <Route path="/user-acc" element={isLoggedIn ? <User_acc /> : <Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
