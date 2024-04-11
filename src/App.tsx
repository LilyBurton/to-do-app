import './App.css'
import TaskCard from './tasks'

function App() {
  const title = "Walk the dog"
  const notStarted = "Not Started"
  const inProgress = "In Progress"
  const status = "Done"
  return (
  <>
    <TaskCard title={title} notStarted={notStarted} inProgress={inProgress} status={status}/>
    <TaskCard title="Buy Groceries" notStarted={notStarted} inProgress={inProgress} status={status}/>
    <TaskCard title="Cook Food" notStarted={notStarted} inProgress={inProgress} status={status}/>
    {/* {card (title, notStarted, inProgress, status)}
    {card ("Cook food", notStarted, inProgress, status)}
    {card ("Buy groceries", notStarted, inProgress, status)} */}
  </>
  )
}

export default App
