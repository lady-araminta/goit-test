import axios from 'axios';

axios.defaults.baseURL = 'https://63b2e7635e490925c5256d24.mockapi.io';

export const fetchUsers = async page => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updUserStatus = async ({ id, update }) => {
  try {
    const response = await axios.put(`/users/${id}`, update);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
