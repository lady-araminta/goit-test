import axios from 'axios';

axios.defaults.baseURL = 'https://63b2e7635e490925c5256d24.mockapi.io';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
