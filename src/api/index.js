import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

const getUsers = async () => {
  const { data: { users } } = await axios('/users?page=1&count=5')
  return users;
}

export { getUsers }