import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPostsThunk } from '../../redux/posts-reducer';
import { getPostsLoadingState, getPostsState } from '../../redux/posts-selectors';
import { getUsersThunk } from '../../redux/users-reducer';
import { getUsersState } from '../../redux/users-selectors';
import Preloader from '../common/Preloader/Preloader';
import PostCard from '../PostCard/PostCard';
import FilterPost from './FilterPost/FilterPost';
import * as queryString from 'querystring';
import { useHistory } from 'react-router-dom';

const Section = styled.div`
  position: relative;
`;

const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: 20px 0;
  padding: 0;
`;

const PostLoop = (props) => {  
  const history = useHistory();
  const dispatch = useDispatch();
  const parsed = queryString.parse(history.location.search.substr(1));
  const postsFresh = useSelector(getPostsState, shallowEqual);
  const postsLoading = useSelector(getPostsLoadingState, shallowEqual);
  const users = useSelector(getUsersState, shallowEqual);  

  let posts = useMemo(() => postsFresh, [postsFresh]);

  let [searchQuery, setSearchQuery] = useState(history.location.search ? parsed['s'] : '');

  // useEffect(() => {
  //   console.log('useEffect');
  // }, [posts]);
  
  useEffect(() => {    
    dispatch(getUsersThunk());
    const parsed = queryString.parse(history.location.search.substr(1));
    history.location.search ? dispatch(getPostsThunk(parsed['s'])) : dispatch(getPostsThunk());
  },[dispatch, history.location.search])

  useEffect(() => {
    history.push({search: `?s=${searchQuery}`})
  }, [history])

  const onFilterChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const onFilterSubmit = (event) => {
    event.preventDefault(); 
    dispatch(getPostsThunk(searchQuery.toLowerCase()));
  }

  console.log(posts);

  let postLoop = posts.map(post => (
    <PostCard       
      user={users.filter(item => item.id === post.userId)} 
      key={post.id} 
      title={post.title} 
      body={post.body}>      
    </PostCard>
  ));

  return (
    <Section>   
      <FilterPost
        onChange={onFilterChange}
        searchQuery={searchQuery}
        onSubmit={onFilterSubmit}
      />
      <List>        
        {postsLoading ? <Preloader /> : postLoop}        
      </List>
    </Section>
  )
}

export default PostLoop;