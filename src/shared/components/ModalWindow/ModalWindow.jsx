import './ModalWindow.css';
import { icons as sprite } from "../../../shared/icons/index";
import Modal from 'react-modal';
import { useEffect } from 'react';

const ModalWindow = ({ children, isOpen, onClose }) => {
  Modal.setAppElement('#root');
  
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
    <button  onClick={onClose} className="modalClose">
        <svg className="iconClose">
          <use xlinkHref={`${sprite}#icon-close`} />
        </svg> 
        </button> 
        {children}
    </Modal>
    )
};

export default ModalWindow;
