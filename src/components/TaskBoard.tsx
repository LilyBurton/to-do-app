import React, { useEffect, useState } from 'react';
import './App.css';
import TaskCard from './TaskCard';
import { tasks as initialTasks, statuses, Task, Priority, priorities } from '../utils/data-tasks';

function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('')
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>('Low')

  useEffect(() => {
    // Load tasks from local storage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      console.log('Tasks Loaded: ', JSON.parse(storedTasks))
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask: Task = {
        title: newTaskTitle,
        status: 'ToDo',
        priority: newTaskPriority,
      }
      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      setNewTaskPriority('Low')
    }
  }
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    const sortedTasks = tasksInColumn.sort((a, b) => {
      if (a.priority === 'High') return -1
      if (b.priority === 'High') return 1
      if (a.priority === 'Medium') return -1
      if (b.priority === 'Medium') return 1
      return 0
    }) 
    return {
      title: status,
      tasks: sortedTasks
    };
  });

  const updateTaskTitle = (task: Task, title: string) => {
    const updatedTasks: Task[] = tasks.map((t) => {
      return t.title === task.title ? { ...t, title } : t;
    });
    setTasks(updatedTasks);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const task = tasks.find((task) => task.title === taskId);
    if (task && task.status !== status) {
      const updatedTasks = tasks.map((t) =>
        t.title === taskId ? { ...t, status } : t
      ) as Task[];
      setTasks(updatedTasks);
    }
  };
  
  

  return (
    <>
      <div className="flex divide-x px-20 py-5">
      <div className="flex flex-col items-center mt-4">
          Task: <input 
          type= "text"
          className="border-solid border-2 border-black rounded-md p-2 mr-2 w-48 h-6 text-sm"
          placeholder="Enter Task Here: " 
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)} style={{ marginBottom: '8px' }}/>
          <select 
          className='border border-black rounded-md mr-2 w-48 h-15'
          value={(newTaskPriority)}
          onChange={(e) => setNewTaskPriority(e.target.value as Priority)} style={{ marginBottom: '8px' }} >
            {priorities.map(priority => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 w-48 h-6 rounded flex items-center" onClick={handleAddTask}>
          <span className='mx-auto'>Add Task</span> 
          </button>
        </div>
        {columns.map((column) => (
          <div onDrop={(e) => handleDrop(e, column.title)} onDragOver={(e) => e.preventDefault()} className="column" style={{width: '100%'}}>
            <h1 className="text-3xl p-2">{column.title}</h1>
            <div className="flex gap-4 flex-col py-2">
              {column.tasks.map((task) => (
                <TaskCard
                  task={task}
                  updateTaskTitle={updateTaskTitle}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TaskBoard;