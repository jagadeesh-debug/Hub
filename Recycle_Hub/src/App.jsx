import { useState } from 'react'
import './App.css'
import Nav from './navBar'
import Login from './person_login'
import Home from './home'
import SignUp from './person_signUp'
import SlotBook from './book_the_slot'
import User_acc from './User_Account'
import Typewriter from 'typewriter-effect'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
     
      <BrowserRouter>
          <Nav/>
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/bys" element={<SlotBook/>}/>
                  <Route path="/user-acc" element={<User_acc/>}/>
               </Routes>
      </BrowserRouter>
    
  )
}

export default App
