import React from 'react'
import { useState } from 'react';

const TaskItem = ({id, text, completed, assignedTo, tasks, setTasks}) => {

const [checked, setChecked] = useState(completed);
const [isEditing, setIsEditing] = useState(false);
const [feladat, setFeladat] = useState(text)
const [ki, setKi] = useState(assignedTo)
const handleDelete = ()=> {
    let tomb = tasks.filter(obj => obj.id != id)
    setTasks(tomb)
}
const handleEdit = ()=> {
    console.log("edit");
    
    setIsEditing(true)
}
const handleSave = ()=> {
    setIsEditing(true)
}
  return (
    <div>
        <li style={{display:'flex'}}  key={id}>
            <input type="checkbox" name="" id="" checked={checked} onChange={e => setChecked(e.target.checked)}/>
            {!isEditing ?
                <span style={{textDecoration: checked ? 'line-through':'none'}}>{text}
            (Felelős: {assignedTo})</span> :
            <span>
                <input type="text" name="" id="" value={feladat} onChange={e => setFeladat(e.target.value)}/>
                <input type="text" name="" id="" value={ki} onChange={e => setKi(e.target.value)}/>
            </span>
            }
            {!isEditing ? <input type="button" value="Szerkesztés" onClick={()=>handleEdit()}/> : <input type="button" value="Mentés" onClick={()=>handleSave()}/>}
            <input type="button" value="Törlés" onClick={handleDelete}/>
        </li>
    </div>
  )
}

export default TaskItem
