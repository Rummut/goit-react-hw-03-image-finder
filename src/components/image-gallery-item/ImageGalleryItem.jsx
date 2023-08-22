import { Component } from 'react';
import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';
import { ModalImage } from 'components/modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const { imageState } = this.props;
    return (
      <>
        <ImageGalleryItemStyled onClick={this.toggleModal}>
          <ImageStyled src={imageState.webformatURL} alt={imageState.tags} />
        </ImageGalleryItemStyled>
        <ModalImage
          modalState={this.state.isModalOpen}
          imageState={imageState}
          toggleModal={this.toggleModal}
        />
      </>
    );
  }
}
