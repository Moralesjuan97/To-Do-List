import React, { useState } from "react";
import "../../styles/App.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setnewTask] = useState("");

  const handleChange = (e) => {
    setnewTask(e.target.value);
  };

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      setTasks([...tasks, newtask]);
      setnewTask("");
    }
  };

  const handleDelete = (id) => {
    const newList = tasks.filter((task, index) => index !== id);
    setTasks(newList);
  };

  return (
    <div className="container">
      <header><h3>To Do List</h3></header>
      <div>
        <input
        className="inputbox"
          value={newtask}
          placeholder="What needs to be done?"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleAdd(e)}
        />
        {tasks.length > 0 ? (
          <ul className="list">
            {tasks.map((task, index) => (
              <li key={index} className="items">
                {task} <button className="deletebutton" onClick={() => handleDelete(index)}>X</button>
              </li>
            ))}
          </ul>
        ) : (
          <p> You are finished! :)</p>
        )}
      </div>
      {tasks.length === 1 ? (
        <footer>{tasks.length} item left </footer>
      ) : (
        <footer>{tasks.length} items left </footer>
      )}
    </div>
  );
};

export default ToDo;
