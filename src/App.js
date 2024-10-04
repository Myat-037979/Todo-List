import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form';
import { api } from './api/apiResource';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const re = await api.get("/todolist");
      setTasks(re.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tasks]);

  const addTask = async (userTask) => {
    const newTask = { id: uuidv4(), task: userTask, complete: false };
    
    await api.post('todolist',newTask)
  };

  const deleteTask = async (task_id) => {
    await api.delete(`/todolist/${task_id}`)
}

  const updateTask = async (task_id,complete) => {
    await api.patch(`/todolist/${task_id}`,{complete})
  }
  return (
    <div className='mx-auto w-50 mt-5'>
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  );
};

export default App;
