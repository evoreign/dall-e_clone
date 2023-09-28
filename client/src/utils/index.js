import {
  surpriseMePrompts
} from "../constants";
import FileSaver from "file-saver";
import axios from "axios";

export function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt();

  return randomPrompt;
}

export async function downloadImage(_id, photo, prompt) {
  FileSaver.saveAs(photo, `download-${_id}-${prompt}.jpg`);

}

export async function handleUpvotes(id, setVotes) {
  try {
    const response = await axios.put('localhost:8080/api/v1/post/vote', {
      id,
      vote: 'upvote',
      
    });
    const updatedPost = response.data.data;
    setVotes(updatedPost.votes);
  } catch (error) {
    console.error(error);
  }
}
// export async function handleUpvotes(id, setVotes, userid) {
//   try {
//     const response = await axios.put('localhost:8080/api/v1/post/vote', {
//       id,
//       vote: 'upvote',
//       upvotes: userid,
//     });
//     const updatedPost = response.data.data;
//     setVotes(updatedPost.votes);
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function handleDownvotes(id, setVotes) {
  try {
    const response = await axios.put('localhost:8080/api/v1/post/vote', {
      id,
      vote: 'downvote',
    });
    const updatedPost = response.data.data;
    setVotes(updatedPost.votes);
  } catch (error) {
    console.error(error);
  }
}
// export async function handleDownvotes(id, setVotes, userid) {
//   try {
//     const response = await axios.put('localhost:8080/api/v1/post/vote', {
//       id,
//       vote: 'downvote',
//       downvotes: userid,
//     });
//     const updatedPost = response.data.data;
//     setVotes(updatedPost.votes);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function getVoteCount(id) {
//   try {
//     const response = await axios.get(`localhost:8080/api/v1/post/${id}/vote`);
//     console.log(response.data); // log the vote count
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };