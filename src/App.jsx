import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <nav className='flex justify-between mt-5 max-w-7xl col my-0 mx-auto h-72px'>
          <div className="logo">
            <img src="brand_logo.png" alt="logo" />
          </div>
          <div>
            <ul className='flex justify-between gap-10'>
              <li href="#">MENU</li>
              <li href="#">LOCATION</li>
              <li href="#">ABOUT</li>
              <li href="#">CONTACT</li>
            </ul>
          </div>
          <div className="login">
            <button className='bg-[#D01C28] text-[#fff] px-4 py-1 rounded-lg'>
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
