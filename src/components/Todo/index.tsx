"use client";
// components/TodoList.js
import { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  // State for checked tasks (using an array of checked IDs)
  const [checked, setChecked] = useState([0]);

  // State for task data retrieved from the API
  const [taskData, setTaskData] = useState([]);

  // Fetch the task data from the API when the component is rendered
  fetch("http://localhost:3000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    res.json().then((data) => {
      setTaskData(data); // Set the task data state with the API response
    });
  });

  // Function to handle task checkbox toggle
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value); // Add task ID to checked array
    } else {
      newChecked.splice(currentIndex, 1); // Remove task ID from checked array
    }

    setChecked(newChecked); // Update the checked state
  };

  return (
    <div className="w-full bg-slate-100 p-5 rounded-lg">
      <h1 className="border-b-2 border-[#e11fb7] font-bold text-2xl text-[#E11F76]">Lugares a visitar</h1>
      <ul className="p-5">
        {taskData.map((data) => (
          <label htmlFor={data.id} className="flex gap-5">
            <input className="h-4 w-4 rounded-full " type="checkbox" name={data.id} id="" />
            <li key={data.id}>{data.task}</li>
          </label>
        ))}
      </ul>
      {/* <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TodoList;
