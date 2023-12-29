import ReactModal from 'react-modal';
import './modal.css';
import Button from '../Button/Button';

const Modal = ({ isOpen, onClose, message }) => {
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel={message}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-content">
          <p className='pModal'>{message}</p>
          <button className="btn-blue" onClick={onClose}>Cerrar</button>
        </div>
      </ReactModal>
    );
  };

export default Modal;