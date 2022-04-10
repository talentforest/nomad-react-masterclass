import { useForm } from "react-hook-form";

export default function ToDoList() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("firstName", { required: true })} placeholder="First Name" />
      <input {...register("lastName", { required: true })} placeholder="Last Name" />
      <input {...register("username", { required: true })} placeholder="Username" />
      <input {...register("password", { required: true, minLength: 10 })} placeholder="Password" />
      <button>Add</button>
    </form>
  )
}
