import i18n from 'i18next';
import _ from 'lodash';
import { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomePage, LoginPage } from '../';
import { CONSTANT } from '../../helpers/constant';
import { en, it } from '../../locales';
import { routes } from '../../utils';
import LandingPage from '../LandingPage';
import VerifyPage from '../VerifyPage';
import ProtectedRoute from './ProtectedRoute';

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

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace(CONSTANT.BASE_PATH);
    }
  }, []);

  return (
    <Router basename={CONSTANT.BASE_PATH}>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={isLogged ? routes.home : routes.landingPage} />}
        />
        <Route path={routes.landingPage} element={<LandingPage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.verify} element={<VerifyPage />} />
        <Route
          path={routes.home}
          element={<ProtectedRoute isLoggedIn={isLogged} children={<HomePage />} />}
        />
        <Route path="*" element={<Navigate to={routes.login} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
