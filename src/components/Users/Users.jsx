import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                    followed: false,
                    fullName: 'Anton',
                    status: 'I like cats',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                    followed: true,
                    fullName: 'Vlad',
                    status: 'I like bears',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                    followed: false,
                    fullName: 'Tasya',
                    status: 'I like dogs',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.wrapper}>
                    <div>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt='No'/>
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

                            <div className={styles.name}>Name: {u.fullName}</div>
                            <div className={styles.status}>Status: {u.status}</div>


                            <div className={styles.country}>Country: {u.location.country}</div>
                            <div className={styles.town}>City: {u.location.city}</div>

                    </div>
                </div>
                </div>
            )
        }
    </div>
}

export default Users;