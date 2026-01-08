import React from 'react'
import { useState } from 'react'

export const AddTask = ({setTask}) => {
  const [text,setText]=useState("")
  const [assignedTo,setAssignedTo]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!text || ! assignedTo) return;
    const newTask={id:Date.now(),text, assignedTo,completed:false}
    setTask(prev=>[...prev,newTask])
    setText("")
    setAssignedTo("")
  }

  return (
    <div>
      <h3>Új teendő hozzáadása</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='új task...' value={text} onChange={(e)=>setText(e.target.value)} />
        <input type="text" placeholder='fejlesztő neve...' value={assignedTo} onChange={(e)=>setAssignedTo(e.target.value)} />
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  )
}


