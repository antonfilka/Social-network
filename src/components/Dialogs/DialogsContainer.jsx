import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let onAddMessage = () => props.store.dispatch(addMessageActionCreator());
//     let onMessageChange = (newText) => props.store.dispatch(updateMessageActionCreator(newText));
//
//
//     return ( <Dialogs
//         addMessage={onAddMessage}
//         messageChange={onMessageChange}
//         dialogs={state.dialogsPage.dialogs}
//         messages={state.dialogsPage.messages}
//         newMessageText={state.dialogsPage.newMessageText}
//     /> );
// }

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(addMessageActionCreator()) },
        messageChange: (newText) => { dispatch(updateMessageActionCreator(newText)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;