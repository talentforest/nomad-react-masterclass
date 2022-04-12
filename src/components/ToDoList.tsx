import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import styled from 'styled-components';

export default function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <>
      <hr />
      <Title>To Dos</Title>
      <CreateToDo />
      <hr/>
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr/>
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr/>
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr/>
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`
