import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { useParams } from 'react-router-dom';
const Sidebar = () => {
  let { username } = useParams();
  return (
    <>
      <div className="sidebar_wrapper">
        <div className="sidebar_logo">Users With Jobs</div>
        <div className="sidebar_description">
          This website is only a website that can show random users, their jobs
          and information.
        </div>
        {username && (
          <Link to="/">
            <button className="read_mode_button">Back Home</button>
          </Link>
        )}
        <button className="read_mode_button">Read More</button>
      </div>
    </>
  );
};

export default Sidebar;
