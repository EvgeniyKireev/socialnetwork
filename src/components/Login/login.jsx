import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormContols";
import {maxLengthCreator, required} from "../common/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(50)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={'email'} placeholder={"login"} validate={[required, maxLength]}/></div>
            <div><Field component={Input} name={'password'} type={'password'} placeholder={"password"} validate={[required, maxLength]}/></div>
            <div><Field component={"input"} name={'rememberMe'} type={"checkbox"}/></div>
            <button>Login</button>
            <div>{props.error}</div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (FormData) => {
        props.login(FormData.email, FormData.password, true);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }
    return (
        <div>
            LOGIN
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
