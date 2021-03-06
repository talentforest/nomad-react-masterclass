import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, fieldState, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const field = useRecoilValue(fieldState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      {
        text: toDo,
        id: Date.now(),
        category: Categories.TO_DO,
        field,
      } as unknown as IToDo,
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
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
    font-size: 16px;
    &::placeholder {
      color: ${(props) => props.theme.textColor};
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
