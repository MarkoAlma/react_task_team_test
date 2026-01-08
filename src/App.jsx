import { useState } from 'react'
import './App.css'
import { AddTask } from './components/AddTask'
import TaskList from './components/TaskList'
import { initialTasks } from './data'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <>
      ALMA
      <AddTask setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
