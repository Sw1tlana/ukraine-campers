import './ModalWindow.css';
import Modal from 'react-modal';
import { useEffect } from 'react';

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
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
    <button  onClick={onClose}>
        {children}
        {/* <svg className="iconClose">
          <use xlinkHref={`${sprite}#icon-close`} />
        </svg> */}
    </button>
     
    </Modal>
    )
};

export default ModalWindow;
