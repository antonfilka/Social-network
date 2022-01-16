import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


class UsersC extends React.Component{

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.screenSize}`).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onChange = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.screenSize}`).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setIsFetching(false)
        })
    }

    render() {
        let defaultPhoto = "https://i.pinimg.com/564x/ae/5c/47/ae5c47d4a6ac53b79dc88d763b4c8095.jpg";
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.screenSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>

                { this.props.isFetching ? <Preloader/> : null}

                <div className={styles.paginator}>

                    {pages.map( (n) => n < 11 && (<span
                        onClick={ () => {this.onChange(n)} }
                        className={n === this.props.currentPage
                            ? styles.activePage
                            : styles.paginatorItem} > {n} </span>))}

                </div>

                {

                    this.props.users.map(u => <div key={u.id}>
                            <div className={styles.wrapper}>
                                <div>
                                    <div>
                                        <NavLink to={'/profile/' + u.id}>
                                            <img src={u.photos.small != null ? u.photos.small : defaultPhoto} className={styles.userPhoto} alt='No'/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(u.id)
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
        )
    }
}

export default UsersC;