import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Createtodo } from '../components/Createtodo'
import { Todos } from '../components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Createtodo/>
      <Todos/>
    </div>
  )
}

export default App
