import React from 'react';
import styles from './Users.module.css';
import axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items)
        })
    }

    const defaultPhoto = "https://i.pinimg.com/564x/ae/5c/47/ae5c47d4a6ac53b79dc88d763b4c8095.jpg";

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.wrapper}>
                    <div>
                        <div>

                                <img src={u.photos.small != null ? u.photos.small : defaultPhoto} className={styles.userPhoto} alt='No'/>

                        </div>

                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </div>
                    <div className={styles.lowWrapper}>

                            <div className={styles.name}>Name: {u.name}</div>
                            <div className={styles.status}>Status: {u.status}</div>


                            <div className={styles.country}>"Country: u.location.country"</div>
                            <div className={styles.town}>"City: u.location.city"</div>

                    </div>
                </div>
                </div>
            )
        }
    </div>
}

export default Users;