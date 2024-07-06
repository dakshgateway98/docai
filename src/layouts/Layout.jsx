import React from 'react';
import NavBar from '../components/Navbar';


const Layout = ({ ...props }) => {

  return (
    <div className="font-roboto font-thin">
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
