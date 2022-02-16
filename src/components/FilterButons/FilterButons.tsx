import React from "react";
import { Stack, Button } from "@chakra-ui/react";

import "./FilterButons.scss";
import { useI18NText } from "../../i18n/locales";

const FilterButons: React.FC<buttonProps> = (props) => {
  const { getI18NText } = useI18NText({ prefix: "component." });
  const handleBtnClick = (filter: Filters) => props.onFilterTask(filter);
  return (
    <Stack spacing={4} m={3} direction="row" align="center">
      <Button
        onClick={() => {
          handleBtnClick("all");
        }}
        variant={props.filter === "all" ? "solid" : "outline"}
      >
        {getI18NText("全部")}
      </Button>
      <Button
        onClick={() => {
          handleBtnClick("completed");
        }}
        variant={props.filter === "completed" ? "solid" : "outline"}
      >
        {getI18NText("已完成")}
      </Button>
      <Button
        onClick={() => {
          handleBtnClick("active");
        }}
        variant={props.filter === "active" ? "solid" : "outline"}
      >
        {getI18NText("未完成")}
      </Button>
    </Stack>
  );
};

export default FilterButons;
