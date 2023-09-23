import React, { useState } from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';
import Modal from './modal';
import { useUser } from "@clerk/clerk-react";

const Card = ({ _id, name, prompt, photo, votes, author_img }) => {
  const [vote, setVote] = useState(votes);

  // handle modal for img popup
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleUpvote = () => {
    if (vote > 0) return;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: _id, vote: 'upvote' })
    };
  
    fetch('http://localhost:8080/api/v1/post/vote', requestOptions)
      .then(response => response.json())
      .then(data => {
        // update the vote state with the new value
        setVote(data.data.votes);
        console.log(data.data.votes)
      })
      .catch(error => console.log(error));
  };

  const handleDownvote = () => {
    if (vote < 0) return;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: _id, vote: 'downvote' })
    };
  
    fetch('http://localhost:8080/api/v1/post/vote', requestOptions)
      .then(response => response.json())
      .then(data => {
        // update the vote state with the new value
        setVote(data.data.votes);
        console.log(data.data.votes);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="rounded-xl group relative 
    shadow-card hover:shadow-cardhover card"
    >
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
        loading='lazy'
        onClick={openModal}
      />
      <Modal isOpen={modalOpen} onClose={closeModal} imageSrc={photo} />
      <div className="group-hover:flex flex-col max-h-[94.5%] 
      hidden absolute bottom-0 left-0 right-0 bg-[#10131f] 
      m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src={author_img}
              alt={`Profile for ${name} on Dall-E prompt ${prompt} source: ${author_img}`}
              className="w-7 h-7 rounded-full object-cover"
            />
            <p className="text-white text-sm">{name}</p>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={handleUpvote}
              className={`p-1 rounded-full ${
                vote === 1 ? 'bg-green-400' : 'bg-gray-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <span className="text-white text-lg font-bold">{vote}</span>
            <button
              type="button"
              onClick={handleDownvote}
              className={`p-1 rounded-full ${
                vote === -1 ? 'bg-red-400' : 'bg-gray-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
            <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;