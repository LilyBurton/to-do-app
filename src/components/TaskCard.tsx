import {Task} from '../utils/data-tasks'

const TaskCard = ({task}: {
    task: Task
}) => { 
    return <div className="border rounded-lg px-2 m-2 bg-emerald-300">
    <div className="text-base font-semibold py-2">
      {task.title}
      </div>
        <div className="flex gap-4 justify-between py-2">
          <div className="text-red-600">{task.notStarted}</div>
          <div>{task.inProgress}</div>
          <div>{task.status}</div>
        </div>
      <div>
    </div>
  </div>
}

export default TaskCard