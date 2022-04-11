import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

export default function ToDoList() {
  const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if(data.password !== data.password1) {
      setError(
        "password1", 
        { message: "Password are not the same."},
        { shouldFocus: true }
      )
    }
    setError("extraError", {message: "Server offline."})
  }
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver email is allowed."
          }
        })}
        placeholder="Email" />
      <span>{errors?.email?.message}</span>
      <input 
        {...register("firstName", 
          { required: "write here", 
            validate: {
              // 객체 리터럴을 만들수도 있다.
              noNico: (value) => 
                value.includes("nico") ? "no nico" : true,
            }
        })} 
        placeholder="First Name" />
      <input 
        {...register("lastName", { 
          required: true 
          })
        } 
        placeholder="Last Name" />
      <input {...register("username", { 
        required: true 
        })} 
        placeholder="Username" />
      <input
        {...register("password", {
          required: "Passwordddd is required",
          minLength: 10
        })}
        placeholder="Password" />
      <span>{errors?.password?.message}</span>
      <input
        {...register("password1", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Your password is too short.",
          }
        })}
        placeholder="Password" />
        <span>{errors?.password1?.message}</span>
      <button>Add</button>
    </form>
  )
}
