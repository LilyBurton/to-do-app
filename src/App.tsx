
import './App.css'

function App() {
  const title = "ToDo List"
  const task = "Clean the kitchen"
  const status = "Done"
  return (
    <div className="border rounded-lg px-2 m-2 bg-stone-400">
      <div className="text-base font-semibold py-2">
        {title}
      </div>
      <div className="flex gap-4 justify-between py-2">
        <div>{task}</div>
        <div>{status}</div>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default App
