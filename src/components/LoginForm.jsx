import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { logIn } = useUserContext();

  const onSubmit = (data) => {
    logIn(data.username);
    console.log("Form data", data);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters long",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed 10 characters",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit" className="fluid ui button blue">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
