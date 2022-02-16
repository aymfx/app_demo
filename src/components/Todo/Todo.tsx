import React from "react";
import { Checkbox, Flex,Button,Spacer } from "@chakra-ui/react";

import "./Todo.scss";
import { useI18NText } from "../../i18n/locales";

const Todo: React.FC<todoProps> = (props) => {
  const { getI18NText } = useI18NText({ prefix: "component." });
  let { onChangeTaskStatus,onDeleteTask, item } = props;
  const styleProps = {
    textDecoration: item.completed ? "line-through" : "none",
  };
  const handleChangeStatus = (e: any) => {
    onChangeTaskStatus(item.id, e.target.checked);
  };
  const handleDeleteTask = (e: any) => {
    onDeleteTask(item.id);
  };
  return (
    <>
      <Flex m={3}>
        <Checkbox  isChecked={item.completed} onChange={handleChangeStatus}>
          <p style={styleProps}>{item.name}</p>
        </Checkbox>
        <Spacer />
        <Button size='xs' onClick={handleDeleteTask}>{getI18NText("删除")}</Button>
      </Flex>
    </>
  );
};

export default Todo;
