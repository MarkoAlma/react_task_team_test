import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, setTasks}) => {
  return (
    <div>
      {tasks.map((obj)=>
        <TaskItem {...obj} />
    )}
    </div>
  )
}

export default TaskList
