import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './navBar'
import Login from './person_login'
import Home from './home'
import SignUp from './person_signUp'
import SlotBook from '../book_the_slot'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      {/* <Nav/>
      <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <SlotBook/>
    </div>
  )
}

export default App
