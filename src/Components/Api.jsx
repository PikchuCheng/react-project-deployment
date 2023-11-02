const API_KEY = 'db5a9301f0c54c8487176de34e49ffb0';
const API_BASE_URL = 'https://api.spoonacular.com/food/api';

const getRecipesFromApi = async (params = {}) => {
  try {
    const url = new URL(`${API_BASE_URL}/recipes`);
    url.searchParams.append('apiKey', API_KEY);

    for (const [key, value] of Object.entries(params)) {
        url.searchParams.append(key, value);
    }

    const response = await fetch(url);
    if (!response.ok) {
       console.log(response);
    }

      const data = await response.json();
      console.log(data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export { getRecipesFromApi };


