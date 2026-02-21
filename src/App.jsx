import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <h2></h2>
        <p>This is a paragraph</p>
        <button>Click me</button>
        <input type="text" placeholder="Enter your name" />
        <input type="password" placeholder="Enter your password" />
        <input type="email" placeholder="Enter your email" />
        <input type="number" placeholder="Enter your number" />
        <input type="date" placeholder="Enter your date" />
      </div>
    </>
  )
}

export default App
