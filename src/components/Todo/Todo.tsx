import React  from "react";
import { Checkbox, Flex } from "@chakra-ui/react";

import "./Todo.scss";

const Todo: React.FC<todoProps> = (props) => {
  let { isCompleted, taskName, onChangeTaskStatus, itemId } = props;
  const styleProps = { textDecoration: isCompleted ? "line-through" : "none" };
  const handleChangeStatus = (e: any) => {
    onChangeTaskStatus(itemId, e.target.checked);
  };
  return (
    <>
      <Flex ml={2}>
        <Checkbox isChecked={isCompleted} onChange={handleChangeStatus}>
          <p style={styleProps}>{taskName}</p>
        </Checkbox>
      </Flex>
    </>
  );
};

export default Todo;
