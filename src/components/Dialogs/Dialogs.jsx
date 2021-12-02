import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => props.dispatch({type:'ADD-MESSAGE', messageText: newMessageElement.current.value});

    let updateMessageInput = () => props.dispatch({type:'UPDATE-MESSAGE-TEXT', messageText: newMessageElement.current.value});

    return (
        <div className={classes.dialogs}>
            <div>
                {props.state.dialogs.map( obj => <DialogItem name={obj.name} id={obj.id}/> )}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map( obj => <Message message={obj.message}/> )}
                <div>
                    <textarea ref={newMessageElement} onChange={ updateMessageInput } value={props.state.updateMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;