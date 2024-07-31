import { addUser, updateIsLogged } from '../redux/userAuthSlice';
import { routes } from '../utils';

export const logout = (dispatch, navigate) => {
  dispatch(addUser({}));
  dispatch(updateIsLogged(false));
  navigate(routes.login);
  localStorage.removeItem('persist:docai');
};
