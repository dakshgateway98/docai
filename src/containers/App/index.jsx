import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomePage, LoginPage } from '../';
import { en, it } from '../../locales';
import { history, routes } from '../../utils';
import VerifyPage from '../VerifyPage';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    it: { translation: it },
  },
});

const App = () => {
  return (
    // <AuthProvider>
      <HistoryRouter history={history}>
        <ToastContainer />
        <Routes>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.verify} element={<VerifyPage />} />
          <Route path={routes.home} element={<HomePage />} />
          <Route path="*" element={<Navigate replace to={routes.login} />} />
        </Routes>
      </HistoryRouter>
    // </AuthProvider>
  );
};

export default App;
