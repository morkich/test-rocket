import * as axios from 'axios';

const basicConnect = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`
})

export const postAPI = {
  getPosts() {
    return basicConnect.get(`posts`)
    .then(response => response.data);
  }
}

export const userAPI = {
  getUsers() {
    return basicConnect.get(`users`)
    .then(response => response.data);
  }
}

//можно было сделать и одной функцией, но так удобнее будет расширять функционал в дальнейшем.