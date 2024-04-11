const TaskCard = ({title, notStarted, inProgress, status}) => { 
    return <div className="border rounded-lg px-2 m-2 bg-emerald-300">
    <div className="text-base font-semibold py-2">
      {title}
      </div>
        <div className="flex gap-4 justify-between py-2">
          <div className="text-red-600">{notStarted}</div>
          <div>{inProgress}</div>
          <div>{status}</div>
        </div>
      <div>
    </div>
  </div>
}

export default TaskCard