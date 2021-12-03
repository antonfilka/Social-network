import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {navBarReducer} from "./navBar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)


export default store;


