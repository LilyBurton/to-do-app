export type Status = 'ToDo' | 'In Progress' | 'Done'
export type Priority = 'Low' | 'Medium' | 'High'

export type Task = {
  title: string,
  status: Status,
  priority: Priority
}

export const statuses: Status[] = ['ToDo', 'In Progress', 'Done']
export const priorities: Priority[] = ['Low', 'Medium', 'High']

export const tasks: Task[] = [
  {
    title: "Walk the dog",
    status: 'ToDo',
    priority: 'High'
  },
  {
    title: "Buy Groceries",
    status: 'ToDo',
    priority: 'Medium'
  },
  {
    title: "Cook Food",
    status: 'In Progress',
    priority: 'High'
  },
  {
    title: "Exercise",
    status: 'Done',
    priority: 'Low'
  },
  {
    title: "Make a video",
    status: 'ToDo',
    priority: 'Low'
  },
  {
    title: "Hoover the living room",
    status: 'In Progress',
    priority: 'High'
  },
  {
    title: "Do the laundry",
    status: 'Done',
    priority: 'Medium'
  },
  {
    title: 'Plant flowers',
    status: 'In Progress',
    priority: 'High'
  }
]