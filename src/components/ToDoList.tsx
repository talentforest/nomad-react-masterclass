import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import styled from 'styled-components';
import ToDo from './ToDo';
import Category from './Category';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }

  return (
    <>
      <Title>To Dos</Title>
      <Category category={category} onInput={onInput} />
      <CreateToDo />
      <hr/>
      {toDos?.map((toDo) => ( 
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`
