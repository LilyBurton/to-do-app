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
  <div className= "app-container">
  {columns.map((column) => (
  column.tasks.length > 0 && (
    <div key={column.title}> {/* Ensure each column has a unique key */}
      <h1 className="text-3xl p-2">{column.title}</h1>
      <div className="task-container">
        {column.tasks.map((task) => <TaskCard task={task} key={task.title} />)}
      </div>
    </div>
  )
))}
  </div>
    
  </>
  )
}

export default App
