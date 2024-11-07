import './App.css'
import Nav from "./components/navBar.jsx";
import Login from "./components/person_login";
import Home from './components/home'
import SignUp from './components/person_signUp'
import SlotBook from './components/book_the_slot'
import User_acc from './components/User_Account'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
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
