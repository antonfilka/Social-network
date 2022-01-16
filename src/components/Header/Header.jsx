import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.header}>
        <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
    alt="Empty"
    />
            <div className={classes.login}>
                {props.isAuthorized ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
      </header>
    );
}

export default Header;