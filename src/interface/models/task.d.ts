interface Task {
  id: string;
  name: string;
  completed: boolean;
}
interface TasksProps {
  tasks: Task[];
}
interface TaskFilters {
  all: () => boolean;
  active: (task: Task) => boolean;
  completed: (task: Task) => boolean;
}

type Filters = keyof TaskFilters;
