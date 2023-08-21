import { Component } from 'react';
import Modal from 'react-modal';
import css from './modal.module.css';
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imageState } = this.props;
    const { isModalOpen } = this.state;
    return (
     <>
        <li onClick={this.openModal}>
          <img src={imageState.webformatURL } alt={imageState.tags} />
        </li>
        <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            imageState={imageState}
          className={css["Modal"]}
           overlayClassName={css["Overlay"]}
          >
            <div >
              <div onClick = {this.closeModal}>
                <img src={imageState.largeImageURL} alt={imageState.tags} />
              </div>
            </div>
          </Modal> 
     </>
    );
  }
}
