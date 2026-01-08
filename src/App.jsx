import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTask } from './components/AddTask'
import TaskList from './components/TaskList'
import { initialTasks } from './data'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <>
      ALMA
      <AddTask/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
