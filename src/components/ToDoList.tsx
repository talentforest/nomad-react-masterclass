import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import styled from "styled-components";
import ToDo from "./ToDo";
import Category from "./Category";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Container>
      <Title>To Dos</Title>
      <div>
        <select value={category} onInput={onInput}>
          <option>코딩</option>
          <option>집안일</option>
          <option>기타</option>
        </select>
        <CreateToDo />
      </div>
      <hr />
      <Category category={category} onInput={onInput} />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 500px;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    > select {
      margin-right: 20px;
      border: 1px solid #aaa;
      border-radius: 5px;
      background-color: ${(props) => props.theme.boxColor};
      font-weight: 700;
      padding-left: 5px;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-family: monospace;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;
