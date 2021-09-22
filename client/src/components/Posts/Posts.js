import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";


import useStyles from './styles.js'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  console.log(".......");
  console.log(posts);
  console.log(".......");

    return ( 
      <div className={classes.mainContainer}> 
        <h1>Posts</h1>
        <Post className = {classes.actionDiv} />
        <Post />
        <Post />
      </div>
    );
}
 
export default Posts;