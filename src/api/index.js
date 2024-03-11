import axios from 'axios';
import qs from 'qs'

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

const getUsers = async (params = {}) => {
  const parsedParams = qs.stringify(params)
  const { data: { users } } = await axios(`/users?${parsedParams}`)
  return users;
}

export { getUsers }