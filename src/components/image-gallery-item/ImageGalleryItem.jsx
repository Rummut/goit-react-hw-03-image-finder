import {
  ImageGalleryItemStyled,
  ImageGalleryStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageState}) => {
  return (
    <>
      {imageState.hits.map(hit => (
        <>
          <ImageGalleryItemStyled key={hit.id}>
            <ImageGalleryStyled src={hit.userImageURL} alt={hit.tags} />
          </ImageGalleryItemStyled>
        </>
      ))}
    </>
  );
};
