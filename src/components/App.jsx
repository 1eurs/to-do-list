import React,{useState} from "react";
import Task from "./Tasks";


function App() {
  const [task, setTask] = useState("");
  const [newTasks, setNewtask] = useState([]);

function handleChange(e){
  setTask(e.target.value)
};

function handleClick(){
  setNewtask(prevValue=>{return [...prevValue,task]})
};

function mapTasksArray(t){
  return <Task task={t}/>
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {newTasks.map(mapTasksArray)}
      </div>
    </div>
  );
}

export default App;
