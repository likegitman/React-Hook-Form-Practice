import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

interface FormValue {
  username: string;
  email: string;
  channel: string;
}

export default function Form() {
  const form = useForm<FormValue>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is Required",
            },
          })}
        />
        <p>{errors.username?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "Invalid email format",
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Channel is Required",
            },
          })}
        />
        <p>{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
