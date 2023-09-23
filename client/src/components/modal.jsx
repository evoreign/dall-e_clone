import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, imageSrc, vote, handleUpvote, handleDownvote }) => {
  const handleModalClick = (event) => {
    // Prevent the event from propagating to the children
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <div className="bg-white p-6 max-w-3xl max-h-full overflow-auto relative shadow-lg" onClick={handleModalClick}>
        <img className="w-full h-auto" src={imageSrc} alt="Large view" />
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleUpvote}
              className={`p-1 rounded-full ${
                vote === 1 ? 'bg-green-400' : 'bg-gray-200'
              }`}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <span className="text-gray-600 text-lg font-bold">{vote}</span>
            <button
              type="button"
              onClick={handleDownvote}
              className={`p-1 rounded-full ${
                vote === -1 ? 'bg-red-400' : 'bg-gray-200'
              }`}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
          <button
            className="absolute top-4 right-4 text-white text-lg font-bold flex items-center justify-center bg-gray-700 rounded-full w-10 h-10 hover:bg-gray-800 transition duration-300"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
