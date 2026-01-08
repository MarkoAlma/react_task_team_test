import React from 'react'
import { useState } from 'react';
import '../tasklist.css'

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
    let tomb = tasks.map((obj)=> obj.id == id ? {id, text:feladat, assignedTo:ki, completed} : obj)
    setIsEditing(false)
    setTasks(tomb)
}
  return (
<div className={`task-card ${checked ? 'done' : ''} ${isEditing ? 'editing' : ''}`}>
  <div className="task-left">
    <label className="neo-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <span></span>
    </label>
  </div>

  <div className="task-center">
    {!isEditing ? (
      <>
        <div className="task-title">{text}</div>
        <div className="task-owner">👤 {assignedTo}</div>
      </>
    ) : (
      <div className="task-edit">
        <input value={feladat} onChange={e => setFeladat(e.target.value)} />
        <input value={ki} onChange={e => setKi(e.target.value)} />
      </div>
    )}
  </div>

  <div className="task-actions">
    {!isEditing ? (
      <button onClick={handleEdit}>✏️</button>
    ) : (
      <button onClick={handleSave}>💾</button>
    )}
    <button onClick={handleDelete}>🗑</button>
  </div>
</div>


  )
}

export default TaskItem
