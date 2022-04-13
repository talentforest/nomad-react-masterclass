import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';
import styled from 'styled-components';

interface IForm {
  toDo: string,
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { 
    register, 
    handleSubmit, 
    setValue,
  } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category }, 
      ...oldToDos,
    ])
    setValue("toDo", "");
  };
  
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do.",
        })}
        placeholder="Write a to do..." 
      />
      <button>Add</button>
    </Form>
  );
}

const Form = styled.form`
  input {
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.textColor};
    padding: 0 10px;
    margin: 0 5px 10px 0; 
    &::placeholder{
      color: ${(props) => props.theme.boxColor};
      font-size: 13px;
    }
  }
  button {
    width: 50px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.textColor};
  }
`
