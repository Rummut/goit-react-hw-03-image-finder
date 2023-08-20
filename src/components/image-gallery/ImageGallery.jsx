import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({imageState}) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem imageState = {imageState}></ImageGalleryItem>
    </ImageGalleryStyled>
  );
};
