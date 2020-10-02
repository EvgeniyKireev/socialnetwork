import React from "react";
import s from "./Dialogs.module.css";
import User from "./User/User";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormContols";
import {maxLengthCreator, required} from "../common/validators";

const maxLength100 = maxLengthCreator(100);
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Введите сообщение...' component={Textarea} name='newMessageText' validate={[required, maxLength100]}/>
            <button>Опубликовать</button>
        </form>
    );
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

const Dialogs = (props) => {
    let sendMes = (values) => {
        props.sendMes(values.newMessageText);
        console.log(values);
    };
    const componentUsers = props.users.map((el) => (
        <User userName={el.userName} key={el.id} id={el.id}/>
    ));
    const componentMessage = props.messages.map((el) => (
        <Message id={el.id} key={el.id} message={el.message}/>
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.users}>{componentUsers}</div>
            <div className={s.userMessages}>{componentMessage}</div>
            <DialogsReduxForm onSubmit={sendMes}/>
        </div>
    );
};

export default Dialogs;
