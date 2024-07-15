import axios from 'axios';

import { displayErrorToast } from '../helpers/displayToast';

//This is throwing an error in our build step.
export const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*',
  },
});

export const setToken = token => {
  api.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
  };
};

export const removeToken = () => {
  api.defaults.headers.common = {
    Authorization: '',
  };
};

// API error handling For token based APIs
export const handleError = error => {
  if (
    error.response &&
    error.response.status !== 200 &&
    error.response.status !== 404 &&
    error.response.status !== 401
  ) {
    displayErrorToast(error.response.data.errorMessage);
    // display toast regarding Error msg
  } else if (error.response && error.response.status === 401) {
    displayErrorToast(error.response.data.errorMessage);
    // window.location.reload();
    // Redirect to login  clear all storage
  }
  throw error;
};

export default api;
