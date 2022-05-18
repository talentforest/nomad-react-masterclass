import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, fieldState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import styled from "styled-components";
import ToDo from "./ToDo";
import Category from "./Category";
import Field from "./Field";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [field, setField] = useRecoilState(fieldState);

  const onCategoryInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const onFieldInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setField(event.currentTarget.value as any);
  };

  return (
    <Container>
      <Title>To Dos</Title>
      <div>
        <Field field={field} onFieldInput={onFieldInput} />
        <CreateToDo />
      </div>
      <div>
        <Category category={category} onCategoryInput={onCategoryInput} />
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} /> // toDo가 같은 prop을 갖고 있기 때문에 가능, 둘다 IToDo타입
        ))}
      </div>
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 500px;
  > div {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    margin: 15px 0;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #aaa;
  }
  > div:last-child {
    min-height: 65vh;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-family: monospace;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;
