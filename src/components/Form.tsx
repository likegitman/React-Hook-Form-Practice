import { DevTool } from "@hookform/devtools";
import { useFieldArray, useForm } from "react-hook-form";

interface FormValue {
  username: string;
  email: string;
  channel: string;
  social: {
    facebook: string;
    instagram: string;
  };
  phoneNumbers: string[];
  phNumbers: [{ number: "" }];
}

export default function Form() {
  const form = useForm<FormValue>({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      social: {
        facebook: "",
        instagram: "",
      },
      phoneNumbers: ["", ""],
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
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
        </div>
        <div className="form-control">
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
        </div>
        <div className="form-control">
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
        </div>
        <div className="form-control">
          <label htmlFor="facebook">FaceBook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: {
                value: true,
                message: "facebook is Required",
              },
            })}
          />
          <p>{errors.social?.facebook?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            {...register("social.instagram", {
              required: {
                value: true,
                message: "Instagram is Required",
              },
            })}
          />
          <p>{errors.social?.instagram?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0", {
              required: {
                value: true,
                message: "Channel is Required",
              },
            })}
          />
          <p>{errors.channel?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone Number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1", {
              required: {
                value: true,
                message: "Channel is Required",
              },
            })}
          />
          <p>{errors.channel?.message}</p>
        </div>
        <div>
          <label>List of Phone Numbers</label>
          <div>
            {fields.map((field, idx) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${0}.number` as const)}
                  />
                  {idx > 0 && (
                    <button type="button" onClick={() => remove(idx)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <button type="button" onClick={() => append({ number: "" })}>
            Add Phone Number
          </button>
          <p>{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
