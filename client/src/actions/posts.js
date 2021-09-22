import * as api from '../api'

//Here we create actions with action creators:

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
    type: 'FETCH_ALL',
    payload: data,
  });
  } catch (error) {
    console.log(error.message)
  }
  
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({
    type: 'CREATE_POST',
    payload: data,
  });
  } catch (error) {
    console.log(error.message)
  }
  
}