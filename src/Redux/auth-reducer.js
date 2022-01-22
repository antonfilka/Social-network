import {UserAPI} from "../api/api";

const  SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING'

const initialState = {
    email: null,
    login: null,
    userId: null,
    isAuthorized: false,
    isFetching: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_DATA: {
            return({
                ...state,
                ...action.data,
                isAuthorized: true
            })
        }
        case SET_IS_FETCHING:{
            return ({
                ...state, isFetching: action.fetching
            })
        }
        default:
            return state;
    }
}


export const setAuthData = (userId, login, email) => ({type: SET_AUTH_DATA, data: {email, login, userId}});
export const setIsFetching = (fetching) => ({type: SET_IS_FETCHING, fetching});

export const auth = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        UserAPI.auth().then( response => {
            if(response.resultCode === 0){
                let {id, login, email} = response.data;
                dispatch(setAuthData(id, login, email));
            }
        })
        dispatch(setIsFetching(false));
    }
}