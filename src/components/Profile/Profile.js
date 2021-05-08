import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
const Profile = ({
  location: {
    state: {
      picture,
      location,
      gender /* , name, nat, login, email, dob, phone */,
    },
  },
}) => {
  /* 
    TODO: Add styles
    
    */
  return (
    <>
      <Sidebar />
      <div>{picture.thumbnail}</div>;<div>{location.street.name}</div>;
      <div>{gender}</div>;
    </>
  );
};

export default Profile;

Profile.propTypes = {
  location: PropTypes.object,
};
