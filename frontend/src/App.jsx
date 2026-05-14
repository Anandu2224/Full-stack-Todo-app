import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Createtodo } from '../components/Createtodo'
import { Todos } from '../components/Todos'


function App() {
  const [todos, setTodos] = useState([])


  // fetch('http://localhost:4000/viewtask').then(async(res)=>{
  //   const json=await res.json();
  //   setTodos(json.tasks);

  // })

  return (
    <div>
      <Createtodo/>
      <Todos todos={todos}/>
    </div>
  )
}
 
export default App
