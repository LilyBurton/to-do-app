import React, { useState } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import { tasks as initialTasks, statuses, Task } from './utils/data-tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn
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
        {columns.map((column) => (
          <div onDrop={(e) => handleDrop(e, column.title)} onDragOver={(e) => e.preventDefault()}>
            <h1 className="text-3xl p-2">{column.title}</h1>
            <div className="flex gap-4 justify-between py-2">
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

export default App;
