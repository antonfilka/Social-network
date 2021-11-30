import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div  className={classes.item}>
                <div>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={classes.active}>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;