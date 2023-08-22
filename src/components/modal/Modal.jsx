import Modal from 'react-modal';
import css from './modal.module.css';

Modal.setAppElement('#root');

export const ModalImage = ({ imageState, modalState, toggleModal }) => {
  return (
    <Modal
      isOpen={modalState}
      onRequestClose={toggleModal}
      imageState={imageState}
      className={css['Modal']}
      overlayClassName={css['Overlay']}
    >
      <div>
        <div>
          <img src={imageState.largeImageURL} alt={imageState.tags} />
        </div>
      </div>
    </Modal>
  );
};
