import React from "react";
import Header from "./Header";
import {setAuthData, setIsFetching} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import axios from "axios";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true})
            .then( response => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                this.props.setAuthData(id, login, email);
            }
        })
        this.props.setIsFetching(false);
    }

    render() {
       return(
           <Header {...this.props}/>
       )
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthData, setIsFetching})(HeaderContainer);