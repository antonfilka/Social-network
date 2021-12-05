const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initialState = {
    users: [ ],
    currentPage: 1,
    screenSize: 5,
    totalUsers: 30
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
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId })
export const unflAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setCurrPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersAC = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers })

export default usersReducer;