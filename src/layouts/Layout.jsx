import React from 'react';
import { useSelector } from 'react-redux';

import { loadingSelector } from './../containers/App/selectors';

import Navbar from '../components/Navbar';

const Layout = ({ pageTitle, ...props }) => {
  const loading = useSelector(loadingSelector());

  return (
    <div className="font-roboto font-thin">
      <Navbar />
      <div>{loading ? <div className="text-center">... loading ...</div> : props.children}</div>
    </div>
  );
};

export default Layout;
