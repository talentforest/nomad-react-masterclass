import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import styled from 'styled-components';
import React from 'react';
import ToDo from './ToDo';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value)
  }

  return (
    <>
      <hr />
      <Title>To Dos</Title>
      <CreateToDo />
      <hr/>
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      {toDos?.map((toDo) => ( 
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`
