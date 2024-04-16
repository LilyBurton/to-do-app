import {Task} from '../utils/data-tasks'

const TaskCard = ({task}: {
    task: Task
}) => { 
  let backgroundColorClass = '';
  switch(task.status) {
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
    return <div className={`border rounded-lg px-2 m-2 ${backgroundColorClass}`}>
    <div className="text-base font-semibold py-2">
      {task.title}
      </div>
  </div>
}

export default TaskCard