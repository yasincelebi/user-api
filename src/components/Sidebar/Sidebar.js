import React from 'react';
import './Sidebar.scss';
const Sidebar = () => {
  return (
    <>
      <div className="sidebar_wrapper">
        <div className="sidebar_logo">Users With Jobs</div>
        <div className="sidebar_description">
          This website is only a website that can show random users, their jobs
          and information.
        </div>
        <button className="read_mode_button">READ MORE</button>
      </div>
    </>
  );
};

export default Sidebar;
