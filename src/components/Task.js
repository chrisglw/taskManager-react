import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../stylesheets/Task.css"

function Task({ id, text, completed, completeTask, deteleTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className='task-text'
        onClick={() => completeTask(id) }>
        {text}
      </div>
      <div className='task-icon-container'
        onClick={() => deteleTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  )
}

export default Task;