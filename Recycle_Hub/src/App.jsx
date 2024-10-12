import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './navBar'
import Login from './person_login'
import Home from './home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <Nav/>
      <Home/>
      <Login/>
    </div>
  )
}

export default App
