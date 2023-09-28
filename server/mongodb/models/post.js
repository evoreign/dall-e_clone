import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  votes: { type: Number, default: 0, required: true },
  author_img: { type: String, required: true },
  // upvotes: {type: String, default: []},
  // downvotes: {type: String, default: []},
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;