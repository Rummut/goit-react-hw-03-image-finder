import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imageState }) => {
  return (
    <ImageGalleryList>
      {imageState.map(hit => (
        <ImageGalleryItem key={hit.id} imageState={hit}></ImageGalleryItem>
      ))}
    </ImageGalleryList>
  );
};
