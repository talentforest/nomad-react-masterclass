import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do.",
        })}
        placeholder="Write a to do..."
        autoFocus
      />
      <button>Add</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  input {
    width: 85%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #aaa;
    background-color: ${(props) => props.theme.boxColor};
    padding: 0 10px;
    margin-right: 10px;
    &::placeholder {
      color: ${(props) => props.theme.textColor};
      font-size: 13px;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    width: 15%;
    font-weight: 700;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.textColor};
  }
`;
