export type Status = 'ToDo' | 'In Progress' | 'Done'

export type Task = {
  title: string,
  status: Status
}

export const statuses: Status[] = ['ToDo', 'In Progress', 'Done']

export const tasks: Task[] = [
  {
    title: "Walk the dog",
    status: 'ToDo'
  },
  {
    title: "Buy Groceries",
    status: 'ToDo'
  },
  {
    title: "Cook Food",
    status: 'In Progress'
  },
  {
    title: "Exercise",
    status: 'Done'
  },
  {
    title: "Make a video",
    status: 'ToDo'
  },
  {
    title: "Hoover the living room",
    status: 'In Progress'
  },
  {
    title: "Do the laundry",
    status: 'Done'
  },
  {
    title: 'Plant flowers',
    status: 'In Progress'
  }
]