import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Users from '../Users/Users';
import './MainPage.scss';
const MainPage = () => {
  return (
    <>
      <div className="main_wrapper">
        <Sidebar />
        <Users />
      </div>
    </>
  );
};

export default MainPage;
