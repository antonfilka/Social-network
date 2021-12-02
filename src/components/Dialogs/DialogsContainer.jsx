import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onAddMessage = () => props.store.dispatch(addMessageActionCreator());
    let onMessageChange = (newText) => props.store.dispatch(updateMessageActionCreator(newText));


    return ( <Dialogs
        addMessage={onAddMessage}
        messageChange={onMessageChange}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
    /> );
}
export default DialogsContainer;