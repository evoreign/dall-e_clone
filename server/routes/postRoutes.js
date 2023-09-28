import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//GET all posts
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});
// POST a post
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo, votes, author_img } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
      votes: 0, // set votes to 0 by default
      author_img,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

// PUT update post votes
router.route('/vote').put(async (req, res) => {
  try {
    const { id, vote } = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    if (vote === 'upvote') {
      post.votes += 1;
      // post.upvotes.push(userid);
    } else if (vote === 'downvote') {
      post.votes -= 1;
      // post.downvotes.push(userid);
    } else {
      return res.status(400).json({ success: false, message: 'Invalid vote type' });
    }

    const updatedPost = await post.save();

    res.status(200).json({ success: true, data: updatedPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to update post, please try again' });
  }
});


// PUT update post name
router.route('/:id/name').put(async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    post.name = name;
    const updatedPost = await post.save();

    res.status(200).json({ success: true, data: updatedPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to update post name, please try again' });
  }
});

//GET a post votes
router.route('/:id/vote').get(async (req, res) => {
  try{
    const { id } = req.params;
    const post = await Post.findById(id);
    if(!post){
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: post.votes });
  }
  catch(err){
    res.status(500).json({ success: false, message: 'Unable to get post votes, please try again' });
  }
});



export default router;