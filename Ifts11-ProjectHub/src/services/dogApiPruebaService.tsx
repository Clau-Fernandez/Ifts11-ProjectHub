
import axios from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1/images/search';

export const fetchDogImageUrl = async () => {
  try {
    const response = await axios.get(DOG_API_URL);
    return response.data[0]?.url;
  } catch (error) {
    console.error('Error al cargar la imagen:', error);
    return null;
  }
};
