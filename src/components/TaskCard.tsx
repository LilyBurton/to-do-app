import React, { useState } from 'react';
import { Task } from '../utils/data-tasks';

const highPriority = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="#ff0000"></path> </g></svg>;
const mediumPriority = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="#fa9200"></path> </g></svg>;
const lowPriority = <svg fill="#55df3a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#55df3a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.293,14.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l6.293-6.293a1,1,0,0,1,1.414,1.414l-8,8a1,1,0,0,1-.325.216.986.986,0,0,1-.764,0,1,1,0,0,1-.325-.216Z"></path></g></svg>;



const TaskCard = ({ task, updateTaskTitle }: {
  task: Task;
  updateTaskTitle: (task: Task, title: string) => void; // Adjusted function type
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('taskId', task.title);
  }
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  let backgroundColorClass = '';
  switch (task.status) {
    case 'ToDo':
      backgroundColorClass = 'bg-red-300';
      break;
    case 'In Progress':
      backgroundColorClass = 'bg-orange-300';
      break;
    case 'Done':
      backgroundColorClass = 'bg-green-300';
      break;
    default:
      backgroundColorClass = 'bg-gray-300'; // Default color
      break;
  }
  return (
    <div 
    draggable 
    onDragStart={handleDragStart}
    className={`border rounded-lg px-2 m-2 w-50 ${backgroundColorClass}`}>
      <div className="text-base font-semibold py-2">
        {isEditingTitle ? (
          <input
            autoFocus
            className="w-full"
            onBlur={() => setIsEditingTitle(false)}
            value={task.title}
            onChange={(e) => updateTaskTitle(task, e.target.value)}
          />
        ) : (
          <div onClick={() => setIsEditingTitle(true)}>
            {task.title}
          </div>
        )}
      </div>
      <div className="flex gap-4 justify-between py-2">
        <div className='w-5'>
          {task.priority === 'High' && highPriority}
          {task.priority === 'Medium' && mediumPriority}
          {task.priority === 'Low' && lowPriority}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;