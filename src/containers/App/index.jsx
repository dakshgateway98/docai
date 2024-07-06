import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, LoginPage } from '../';
// import { AuthProvider } from '../../contexts/authContext';
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
        <Routes>
          <Route path={routes.login} exact element={<LoginPage />} />
          <Route path={routes.verify} exact element={<VerifyPage />} />
          <Route path={routes.home} exact element={<HomePage />} /> 
          <Route path="*" element={<Navigate replace to={routes.login} />} />
        </Routes>
      </HistoryRouter>
    // </AuthProvider>
  );
};

export default App;
