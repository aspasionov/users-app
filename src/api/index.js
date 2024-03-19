import axios from "axios";
import qs from "qs";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const getUsers = async (params = {}) => {
  try {
    const parsedParams = qs.stringify(params);
    const {
      data: { users },
    } = await axios(`/users?${parsedParams}`);
    return users;
  } catch (err) {
    throw err.response.data;
  }
};

const getToken = async (params = {}) => {
  const {
    data: { token },
  } = await axios("/token");
  return token;
};

const postUser = async (user) => {
  try {
    await axios.post("/users", user);
  } catch (err) {
    throw err.response.data;
  }
};

const getPositions = async (params = {}) => {
  const {
    data: { positions },
  } = await axios("/positions");
  return positions;
};

export { getUsers, getPositions, postUser, getToken };
