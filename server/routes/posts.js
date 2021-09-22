import express from 'express';
import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

//WI added the /posts prefix in index.js:
//app.use('/posts', postsRoutes); 

router.get('/', getPosts);
router.post('/', createPost);

export default router;