import { apiEndPoint } from './apiEndPoint';
import client, { removeToken } from './index';
import { handleError } from './index';

export const signInUserAPI = async postData => {
  try {
    removeToken();
    const res = await client.post(apiEndPoint.LOGIN, postData);
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};

export const registerUserAPI = async postData => {
  try {
    removeToken();
    const res = await client.post(apiEndPoint.REGISTER, postData);
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};

export const resetPasswordUserAPI = async postData => {
    try {
      removeToken();
      const res = await client.post(apiEndPoint.RESET_PASSWORD, postData);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  };

  export const forgotPasswordUserAPI = async postData => {
    try {
      removeToken();
      const res = await client.post(apiEndPoint.FORGOT_PASSWORD, postData);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  };

export const googleLoginAPI = async () => {
  try {
    removeToken();
    const res = await client.get(apiEndPoint.GOOGLE_LOGIN);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const googleCallBackAPI = async postData => {
  try {
    removeToken();
    const res = await client.post(apiEndPoint.GOOGLE_CALLBACK, postData);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
