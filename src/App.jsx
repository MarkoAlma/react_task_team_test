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
      <div style={{display:'flex',}}>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
