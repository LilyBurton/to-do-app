import './App.css'
import TaskCard from './components/TaskCard'
import {Task} from './utils/data-tasks'

function App() {
  const task: Task = {
    title: "Walk the dog",
    notStarted: "Not Started",
    inProgress: "In Progress",
    status: "Done"
  }
  
  return (
  <>
    <TaskCard task={task} />
    {/* <TaskCard title="Buy Groceries" notStarted={notStarted} inProgress={inProgress} status={status}/>
    <TaskCard title="Cook Food" notStarted={notStarted} inProgress={inProgress} status={status}/> */}
    
  </>
  )
}

export default App
