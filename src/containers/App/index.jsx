import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import _ from 'lodash';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { HomePage, LoginPage } from '../';
import { CONSTANT } from '../../helpers/constant';
import { en, it } from '../../locales';
import { history, routes } from '../../utils';
import VerifyPage from '../VerifyPage';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    it: { translation: it },
  },
});



const App = () => {
  const isLogged = useSelector(state => _.get(state, 'user.isLogged', false));
  Modal.setAppElement('#root');

  return (
      <HistoryRouter basename={CONSTANT.BASE_PATH} history={history}>
        <ToastContainer />
        <Routes>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.verify} element={<VerifyPage />} />
          <Route path={routes.home} element={<ProtectedRoute isLoggedIn={isLogged} children={<HomePage />} />} />
          <Route path="*" element={<Navigate to={routes.login} replace />} />
        </Routes>
      </HistoryRouter>
  );
};

export default App;
