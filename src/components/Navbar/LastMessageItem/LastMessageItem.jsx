import React from "react";
import classes from './LastMessageItem.module.css';

const lastMessageItem = (props) => {
    const defaultAvatar = 'https://assets.onlinelabels.com/images/clip-art/GDJ/Male%20Avatar-277081.png'
    return (
        <div className={classes.items}>
            <img src={defaultAvatar} alt='' />
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default lastMessageItem;