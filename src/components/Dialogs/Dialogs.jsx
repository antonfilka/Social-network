import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div>
                {props.state.dialogs.map( obj => <DialogItem name={obj.name} id={obj.id}/> )}

            </div>
            <div className={classes.messages}>
                {props.state.messages.map( obj => <Message message={obj.message}/> )}
            </div>
        </div>
    );
}
export default Dialogs;