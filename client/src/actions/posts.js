import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';


//Here we create actions with action creators:

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
    type: FETCH_ALL,
    payload: data,
  });
  } catch (error) {
    console.log(error)
  }
  
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({
    type: CREATE,
    payload: data,
  });
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({
    type: UPDATE,
    payload: data,
  });
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({
    type: DELETE,
    payload: id,
  });
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id, likeCallback, currentValue) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
    type: LIKE,
    payload: data,
  });
  likeCallback(!currentValue);
  } catch (error) {
    console.log(error)
  }
}