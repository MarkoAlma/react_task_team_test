import React from 'react'

const TaskItem = ({id, text, completed, assignedTo}) => {
  return (
    <div>
        <li style={{display:'flex'}}  key={id}>
            <input type="checkbox" name="" id="" />
            {text}
            (Felelős: {assignedTo})
            <input type="button" value="Szerkesztés" />
            <input type="button" value="Törlés" />
        </li>
    </div>
  )
}

export default TaskItem
