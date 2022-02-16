interface Task {
    id: string;
    name: string;
    completed:boolean;
}

interface TasksProps {
  tasks: Task[];
}



interface Filters {
  all:()=>boolean;
  active:(task:Task)=>boolean;
  completed:(task:Task)=>boolean;
}

interface Item {
  select: boolean
}

const filters: Filters = {
  all: () => true,
  select: (item: Item) => item.select,
}

type Filter = keyof Filters

const filter = (arr: Item[], filter: Filter): Item[] => arr.filter(filters[filter])

