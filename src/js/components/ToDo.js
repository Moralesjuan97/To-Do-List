import React, { useState } from "react";
import "../../styles/App.css";

const ToDo = () => {
  const [tasks, setTasks] = useState(["hola", "chao", "fubol"]);
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
      <header><h3>To Do</h3></header>
      <div>
        <input
          value={newtask}
          placeholder="Add to-do"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleAdd(e)}
        />
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => handleDelete(index)}>X</button>
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
