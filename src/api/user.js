import { apiEndPoint } from './apiEndPoint';
import client, { removeToken } from './index';
import { handleError } from './index';

export const getUserDetailsAPI = async () => {
  try {
    const res = await client.get(apiEndPoint.GET_USER_DETAILS);
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};