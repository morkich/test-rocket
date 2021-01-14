import { postAPI } from "../api/api";

const SET_POSTS = 'SET_POSTS';
const SET_POSTS_LOADING = 'SET_POSTS_LOADING';

let initialState = {
  posts: [],
  loadingPosts: true,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case SET_POSTS_LOADING:
      return {
        ...state,
        loadingPosts: action.loadingPosts
      };
    default:
      return state;
  }
}

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts
  }
}

export const setLoadingPosts = (loadingPosts) => {
  return {
    type: SET_POSTS_LOADING,
    loadingPosts
  }
}

export const getPostsThunk = (filterQuery) => {
  return (dispatch) => {
    dispatch(setLoadingPosts(true));
    postAPI.getPosts().then(response => {
      if(filterQuery) {
        let RegExpFlags = `gi`;
        let Reg = new RegExp(`${filterQuery}`, RegExpFlags);
        response = response.filter(item => item.title.toLowerCase().match(Reg))
      }
      dispatch(setPosts(response));
      dispatch(setLoadingPosts(false));
    })   
  } 
}

export default postsReducer;