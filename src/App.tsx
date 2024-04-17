import './App.css'
import TaskCard from './components/TaskCard'
import {tasks, statuses} from './utils/data-tasks'

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })
  
  return (
  <>
  <div className= "flex divide-x px-20 py-5">
  {columns.map((column) => (
    <div>
      <h1 className="text-3xl p-2">{column.title}</h1>
      <div className="flex gap-4 justify-between py-2">
        {column.tasks.map((task) => <TaskCard task={task} key={task.title} />)}
      </div>
    </div>
  )
)}
  </div>
    
  </>
  )
}

export default App
