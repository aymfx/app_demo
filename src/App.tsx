import React, { useState, useRef, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  theme,
} from "@chakra-ui/react"
import {v4 as uuidv4} from "uuid"
import AddInput from './components/AddInput/AddInput'
import FilterButons from './components/FilterButons/FilterButons'
import Todo from './components/Todo/Todo'
import {useI18NText} from './i18n/locales'

const FILTER_MAP:Filters = {
  all: () => true,
  active: task => !task.completed,
  completed: task => task.completed
};



export const App = (props:TasksProps) => {
  const { getI18NText } = useI18NText({ prefix: 'app.' })
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState<Filter>('all');

  const handleAddTask = (taskName:string) =>{
    const newTask = { id: "todo-" + uuidv4(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
    console.log(tasks,newTask)
  }

  const handleFilterTask = (filter:Filter) =>{
    setFilter(filter)
  }

  const handleChangeTaskStatus = (id:string,isCompleted:boolean)=>{
    setTasks(tasks.map(item => {
      if(item.id ===id){
        item.completed = isCompleted
      }
      return item;
    })) 
  } 

  const handleFilterList = ()=>{
    return tasks.filter(FILTER_MAP[filter]).map(item=> <Todo onChangeTaskStatus={handleChangeTaskStatus} isCompleted={item.completed} key={item.id} itemId={item.id} taskName={item.name} />)
  }

  return <ChakraProvider theme={theme}>
    <Box boxShadow='dark-lg' w='60%' p={4} mx="auto" mt="30" >
      <Heading as='h2' size='lg' mx="auto" my="30" w='30%'>{getI18NText("今日待办事项")}</Heading>
      <AddInput onAddTask={handleAddTask}/>
      <FilterButons onFilterTask={handleFilterTask} filter={filter}  />
      {handleFilterList()}
    </Box>
  </ChakraProvider>
}
