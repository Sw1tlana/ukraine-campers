// import css from "./ModalWindow.module.css";
import Modal from 'react-modal';
import { useEffect } from 'react';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)'
  },
};

const ModalWindow = ({ children, isOpen, onClose }) => {

      useEffect(() => {
      const handleKeyDown = (event) => {
      if (event.key === 'Escape') { 
        onClose();
      }
    };
        window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown); 
    }
  }, [onClose]);    
    return (
     <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
    <button  onClick={onClose}>Close
        {children}
        {/* <svg className="iconClose">
          <use xlinkHref={`${sprite}#icon-close`} />
        </svg> */}
    </button>
     
    </Modal>
    )
};

export default ModalWindow;
