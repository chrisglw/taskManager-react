import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid'
import '../stylesheets/TaskForm.css'

function TaskForm(props) {

  const [input, setInput] = useState('')

  const manageChange = e => {
    setInput(e.target.value)
  };

  const manageSend = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
    setInput('');
  };

  return (
    <form
      className='task-form'
      onSubmit={manageSend}>
      <input
        className='task-input'
        type='text'
        placeholder='Enter a task'
        name='text'
        value={input}
        onChange={manageChange}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  )
}

export default TaskForm;