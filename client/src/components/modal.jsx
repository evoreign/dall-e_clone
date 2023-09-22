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
      className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50"
      onClick={handleModalClick} // Add onClick event handler to the modal container
    >
      <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto relative">
        <img className="w-full h-auto" src={imageSrc} alt="Large view" />
        <button
          className="absolute top-4 left-4 text-white text-lg font-bold"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Modal;