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
            <div>remember me:<Field component={"input"} name={'rememberMe'} type={"checkbox"}/></div>
            {props.captcha && <div><div>Captcha:</div><div><img src={props.captcha}/></div>
                <div><Field component={Input} name={'captcha'} placeholder={"enter the characters"}/></div></div>}
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
        props.login(FormData.email, FormData.password, true, FormData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }
    return (
        <div>
            LOGIN
            <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})

export default connect(mapStateToProps, {login})(Login);
