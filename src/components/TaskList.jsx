import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, setTasks}) => {
  return (
    <div>
      {tasks.map((obj)=>
        <TaskItem key={obj.id} {...obj} />
    )}
    </div>
  )
}

export default TaskList
