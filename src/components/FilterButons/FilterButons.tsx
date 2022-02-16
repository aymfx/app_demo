import React,{useState} from 'react';
import {
  Stack,
  Button
} from "@chakra-ui/react"
import './FilterButons.scss';

const FilterButons: React.FC<buttonProps> = (props) => {
  
  const handleBtnClick = (filter:Filter) => props.onFilterTask(filter)
  return <Stack spacing={4} m={3} direction='row' align='center'>
    <Button onClick={()=>{handleBtnClick("all")}} variant={props.filter === "all" ? "solid":"outline"}>全部</Button>
    <Button onClick={()=>{handleBtnClick("completed")}} variant={props.filter === "completed" ? "solid":"outline"}>已完成</Button>
    <Button onClick={()=>{handleBtnClick("active")}} variant={props.filter === "active" ? "solid":"outline"}>未完成</Button>
  </Stack>;
};

export default FilterButons;
