import { useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <>
      <hr />
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  )
}
