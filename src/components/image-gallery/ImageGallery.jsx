import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';


export const ImageGallery = ({ imageState }) => {
  return (
    <ImageGalleryStyled>
      {imageState.map(hit => (
        <ImageGalleryItem key={hit.id} imageState={hit}></ImageGalleryItem>))}
    </ImageGalleryStyled>

  );
};
