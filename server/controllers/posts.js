import { Mongoose } from "mongoose";
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => { //This route is reachable through localhost:5000/posts/
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json(error.message);
  }



  
}

export const createPost = async (req, res) => { 
  const post = req.body;
  const newPost = new PostMessage(post)
  
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
}

export const updatePost = async (req, res) => { 
  const { id: _id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post matches the requested id');

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
}