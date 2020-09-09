import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={"input"} name={'login'} placeholder={"login"} /></div>
      <div><Field component={"input"} name={'password'} placeholder={"password"} /></div>
      <div><Field component={"input"} name={'rememberMe'} type={"checkbox"} /></div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (FormData) => {
        console.log(FormData);
    }
  return (
    <div>
      LOGIN
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
