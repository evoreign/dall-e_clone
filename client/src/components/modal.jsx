import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  const handleModalClick = (event) => {
    // Prevent the event from propagating to the children
    event.stopPropagation();

    // Close the modal when clicked
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300"
      onClick={handleModalClick}
    >
      <div className="bg-white p-6 max-w-3xl max-h-full overflow-auto relative shadow-lg">
        <img className="w-full h-auto" src={imageSrc} alt="Large view" />
        <button
          className="absolute top-4 right-4 text-white text-lg font-bold flex items-center justify-center bg-gray-700 rounded-full w-10 h-10 hover:bg-gray-800 transition duration-300"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
