import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, setTasks}) => {
  return (
    <div style={{margin:'0 auto',}}>
        
      {tasks.map((obj)=>
        <TaskItem key={obj.id} {...obj} setTasks={setTasks} tasks={tasks}/>
        
    )}

    </div>
  )
}

export default TaskList
