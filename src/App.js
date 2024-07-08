import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task,setTask] = useState("");
  const [taskList, settaskList] = useState([]);
  function handleAdd() {
    const newList = taskList.concat({ id: uuidv4() , task });
    settaskList(newList);
  }
  function handleDelete() {
    const newList = [];
    settaskList(newList);
  }

  return (
    
    <div className="App">
      <h1> Todo List </h1>
      <input value={task} type="text" placeholder="Add your task" onChange={(e)=> {setTask(e.target.value)}}/>
      <button onClick={handleAdd}>Add Task</button>      
      <button onClick={handleDelete}>Delete All Tasks</button><br/><br/>
      <h3> My Todo List... </h3>
      <ul>
      {taskList.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;
