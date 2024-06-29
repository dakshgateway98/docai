import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../layouts';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t('containers.home.title')}>
      <div className="space-y-5 text-justify">
       Home Page
       </div>
    </Layout>
  );
};

export default Home;
