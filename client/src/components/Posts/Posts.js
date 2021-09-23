import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';
import Post from "./Post/Post";

import useStyles from './styles.js'

const Posts = ({ setCurrentId, setLikeOrDeleted, likeOrDeleted }) => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();


    return ( 
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
        {
          posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} setLikeOrDeleted={setLikeOrDeleted} likeOrDeleted={likeOrDeleted} />
            </Grid>
          ))
        }
      </Grid>
    )
    );
}
 
export default Posts;