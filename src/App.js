import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        <h2>Task Manager</h2>
      </div>
      <div className='tasks-list'>
        <h1>My tasks</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
