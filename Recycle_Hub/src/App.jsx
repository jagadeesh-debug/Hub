import { useState } from 'react'
import './App.css'
import Nav from './navBar'
import Login from './person_login'
import Home from './home'
import SignUp from './person_signUp'
import SlotBook from './book_the_slot'
import User_acc from './User_Account'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' '>
      <Nav/>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <SlotBook/> */}
        {/* <User_acc/> */}
    </div>
  )
}

export default App
