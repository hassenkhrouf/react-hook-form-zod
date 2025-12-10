import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "./App.css";
import Inputs from "./components/Inputs";
import InputError from "./components/InputError";
import { type ISignup, signupSchema } from "./validations/auth";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ISignup>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });
  const onSubmit: SubmitHandler<ISignup> = (data) => {
    const user = {
      firstName: data["first-name"],
      lastName: data["last-name"],
      email: data.email,
      password: data.password,
    };
    console.log(user);
    reset();
  };

  const signupInputs = [
    {
      type: "text",
      labelName: "First Name",
      id: "firstName",
      placeholder: "Enter your first name",
      register: register("first-name"),
      error: errors["first-name"],
    },
    {
      type: "text",
      labelName: "Last Name",
      id: "lastName",
      placeholder: "Enter your last name",
      register: register("last-name"),
      error: errors["last-name"],
    },
    {
      type: "email",
      labelName: "Email",
      id: "email",
      placeholder: "Enter your email",
      register: register("email"),
      error: errors.email,
    },
    {
      type: "password",
      labelName: "Password",
      id: "password",
      placeholder: "Enter your password",
      register: register("password"),
      error: errors.password,
    },
    {
      type: "password",
      labelName: "Confirm Password",
      id: "confirmPassword",
      placeholder: "Enter your confirm password",
      register: register("confirm-password"),
      error: errors["confirm-password"],
    },
  ];
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {signupInputs.map((input, index) => (
          <div key={index}>
            <Inputs
              type={input.type}
              labelName={input.labelName}
              id={input.id}
              placeholder={input.placeholder}
              register={input.register}
            />
            <InputError error={input.error} />
          </div>
        ))}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
