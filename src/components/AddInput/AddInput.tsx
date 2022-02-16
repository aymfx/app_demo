import React,{useState} from 'react';
import {
  Spacer,
  Input,
  Flex,
  Button
} from "@chakra-ui/react"
import './AddInput.scss';

const AddInput: React.FC<inputProps> = (props) => {
  
  const [taskName, setValue] = useState('')
  const handleChangeValue = (event:any) => setValue(event.target.value)
  const handleSubmitClick = ()=> {
    const {onAddTask} = props
    if (!taskName.trim()) {
      return;
    }
    setValue('')
    onAddTask(taskName)
  }
  return <Flex>
    <Input
      value={taskName}
      placeholder='请输入任务~' 
      onChange={handleChangeValue} 
      autoComplete="off" mr="1" />
    <Spacer />
    <Button colorScheme='teal' size='md' onClick={handleSubmitClick}>
      添加任务
    </Button>
  </Flex>;
};

export default AddInput;
