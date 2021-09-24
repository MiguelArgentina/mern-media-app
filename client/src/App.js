import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memories from './images/lions.jpg'
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts';
import useStyles from './styles.js'
import { getPosts } from './actions/posts';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [likeOrDeleted, setLikeOrDeleted] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());

    
  }, [currentId, dispatch, likeOrDeleted])

  return ( 
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Beautiful animals</Typography> 
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
             <Grid item xs={12} sm={4}>
               <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} setLikeOrDeleted={setLikeOrDeleted} likeOrDeleted={likeOrDeleted} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    </Container>
   );
}
 
export default App;