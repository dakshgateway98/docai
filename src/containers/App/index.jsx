import i18n from 'i18next';
import _ from 'lodash';
import { useEffect, lazy, Suspense } from 'react';
import { initReactI18next } from 'react-i18next';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CONSTANT } from '../../helpers/constant';
import { en, it } from '../../locales';
import { routes } from '../../utils';
import ProtectedRoute from './ProtectedRoute';

// Lazy loading components
const LandingPage = lazy(() => import('../LandingPage'));
const LoginPage = lazy(() => import('../LoginPage'));
const VerifyPage = lazy(() => import('../VerifyPage'));
const HomePage = lazy(() => import('../HomePage'));

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
      <Suspense fallback={<div>Loading...</div>}>
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
            element={<ProtectedRoute isLoggedIn={isLogged}><HomePage /></ProtectedRoute>}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
