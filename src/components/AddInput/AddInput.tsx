import React,{useState} from 'react';
import {
  Spacer,
  Input,
  Flex,
  Button
} from "@chakra-ui/react"
import './AddInput.scss';
import {useI18NText} from '../../i18n/locales'

const AddInput: React.FC<inputProps> = (props) => {
  const { getI18NText } = useI18NText({ prefix: 'component.' }) 
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
      placeholder={getI18NText("请输入任务~")}
      onChange={handleChangeValue} 
      autoComplete="off" mr="1" />
    <Spacer />
    <Button colorScheme='teal' size='md' onClick={handleSubmitClick}>
      {getI18NText("添加任务")}
    </Button>
  </Flex>;
};

export default AddInput;
