import news from "../components/News/News";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_SUBSCRIBING = 'SET_SUBSCRIBING'

let initialState = {
    users: [ ],
    currentPage: 1,
    screenSize: 40,
    totalUsers: 30,
    isFetching: true,
    subscribing: []
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...action.users ]}
        }
        case SET_TOTAL_USERS: {
            return {...state, totalUsers: action.totalUsers}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_SUBSCRIBING:{

            if(action.data.subscrib){
                let pushed = [...state.subscribing]
                pushed.push(action.data.id)
                return {...state, subscribing: [...pushed]}
            }
            else{
                return {...state, subscribing: state.subscribing.map(id => {
                    if(!(action.data.id === id)){
                        return id;
                    }
                    })}
            }
        }

        default:
            return state;

    }
}


export const follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers })
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching })
export const setSubscribing = (sid) => ({type: SET_SUBSCRIBING, data: {subscrib: sid.subscribing, id: sid.id}})

export default usersReducer;