import axios from 'axios';

export const FetchImages = async ({ page, values }) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${values}&page=${page}&key=38182607-aab9c53a0cd2b78abfbdb0e24&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
