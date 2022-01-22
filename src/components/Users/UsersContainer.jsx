
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setSubscribing,
    setTotalUsers,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import UsersC from "./UsersC";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        screenSize: state.usersPage.screenSize,
        isFetching: state.usersPage.isFetching,
        subscribing: state.usersPage.subscribing
    }
}

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setTotalUsers, setCurrentPage, setIsFetching})(UsersC);