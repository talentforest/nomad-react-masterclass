import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDeleteClick = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <List>
      <div>
        <div></div>
        <span>{text}</span>
      </div>
      <div>
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClick}>
            Doing
          </button>
        )}
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClick}>
            To Do
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            Done
          </button>
        )}
        <button name="delete" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </List>
  );
}

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 5px;
  vertical-align: center;
  background-color: #806dea;
  div {
    display: flex;
    align-items: center;
    border-radius: 50%;
    > div {
      width: 5px;
      height: 5px;
      background-color: ${(props) => props.theme.textColor};
      margin-right: 10px;
    }
  }
  span {
    padding-top: 3px;
    font-size: 17px;
    font-weight: 600;
    margin-right: 15px;
  }
  button {
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.textColor};
    margin-left: 5px;
    cursor: pointer;
  }
`;
