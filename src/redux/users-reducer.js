import { userAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_USERS_LOADING = 'SET_USERS_LOADING';

let initialState = {
  users: [],
  loadingUsers: true,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_USERS_LOADING:
      return {
        ...state,
        loadingUsers: action.loadingUsers
      };
    default:
      return state;
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setLoadingUsers = (loadingUsers) => {
  return {
    type: SET_USERS_LOADING,
    loadingUsers
  }
}

export const getUsersThunk = () => {
  return (dispatch) => {
    dispatch(setLoadingUsers(true));
    userAPI.getUsers().then(response => {
      dispatch(setUsers(response));
      dispatch(setLoadingUsers(false));
    })   
  } 
}

export default usersReducer;