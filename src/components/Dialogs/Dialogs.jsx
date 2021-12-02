import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let onAddMessage = () => props.addMessage();
    let onMessageChange = (event) => props.messageChange(event.target.value);

    return (
        <div className={classes.dialogs}>

            <div>
                {props.dialogs.map( obj => <DialogItem name={obj.name} id={obj.id}/> )}
            </div>

            <div className={classes.messages}>

                {props.messages.map( obj => <Message message={obj.message}/> )}

                <div>
                    <textarea onChange={ onMessageChange } value={props.newMessageText}/>
                </div>

                <div>
                    <button onClick={ onAddMessage }>Send message</button>
                </div>

            </div>

        </div>
    );
}
export default Dialogs;