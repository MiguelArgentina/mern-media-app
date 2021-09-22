import React from "react";
import Post from "./Post/Post";

import useStyles from './styles.js'

const Posts = () => {
const classes = useStyles();
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