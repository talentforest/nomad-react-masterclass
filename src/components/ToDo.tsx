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
        <button>코딩🖥 🔽</button>
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
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid #cecece;
  list-style: none;
  font-size: 14px;
  > div:first-child {
    > span {
      padding-top: 3px;
      font-weight: 600;
      margin-right: 15px;
    }
    > button {
      width: 60px;
      height: 26px;
      border-radius: 6px;
      color: ${(props) => props.theme.textColor};
      font-size: 10px;
      font-weight: 700;
      border: 1px solid #c7c7c7;
      background-color: #fff;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  > div:last-child {
    > button {
      width: 50px;
      height: 26px;
      border-radius: 6px;
      background-color: ${(props) => props.theme.accentColor};
      color: ${(props) => props.theme.textColor};
      margin-left: 5px;
      font-size: 10px;
      font-weight: 700;
      border: 1px solid #ffefca;
      cursor: pointer;
    }
  }
`;
