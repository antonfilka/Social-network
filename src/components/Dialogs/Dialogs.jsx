import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={classes.active}>Tasya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={classes.active}>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={classes.active}>Nikita</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={classes.active}>Denis</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={classes.active}>Angelina</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6' activeClassName={classes.active}>Viktor</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>Ho</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>
    );
}
export default Dialogs;