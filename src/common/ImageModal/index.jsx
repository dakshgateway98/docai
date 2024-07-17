import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageModal = ({ isOpen, onRequestClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      appElement={document.getElementById('root')}
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {imageSrc && (
        <Zoom>
          <img src={imageSrc} alt="Modal View" className="max-w-full max-h-full rounded-md shadow-lg" />
        </Zoom>
      )}
      <button onClick={onRequestClose} className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full">
      <FontAwesomeIcon icon={faTimes} className="text-gray-800 w-5 h-5" />
      </button>
    </Modal>
  );
};

export default ImageModal;
