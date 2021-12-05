import Users from "./UsersC";
import {connect} from "react-redux";
import {followAC, setCurrPageAC, setTotalUsersAC, setUsersAC, unflAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.screenSize
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unflAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrPageAC(currentPage));
        },
        setTotalUsers: (totalUsers) => {
            dispatch(setTotalUsersAC(totalUsers))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);