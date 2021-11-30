import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name='Tasya' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Denis' id='3'/>
                <DialogItem name='Vlad' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Nikita' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hello World'/>
                <Message message='How are you'/>
                <Message message='Yo'/>
            </div>
        </div>
    );
}
export default Dialogs;