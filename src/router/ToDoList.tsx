import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

export default function ToDoList() {
  const { 
    register, 
    handleSubmit, 
    setValue,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log("add to do:", data.toDo)
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do.",
        })}
        placeholder="Write a to do" 
      />
      <button>Add</button>
    </form>
  )
}
