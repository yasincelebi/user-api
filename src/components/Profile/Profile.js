import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import './Profile.scss';
import { firstLetterUpper } from '../../helpers/helper';
const Profile = ({
  location: {
    state: { picture, location, gender, name, nat, login, email, dob, phone },
  },
}) => {
  const fullname = name.first + ' ' + name.last;
  return (
    <>
      <Sidebar />
      <div className="profile_wrapper">
        <div className="profile-inwrapper">
          <div className="profile_user">
            <img src={picture.large} alt="" />
            <div className="info-wrapper">
              <span className="adverb">Name: </span>
              <div className="info">{fullname}</div>
            </div>
            <div className="info-wrapper">
              <span className="adverb">Gender:</span>
              <div className="info">{firstLetterUpper(gender)}</div>
            </div>

            <div className="info-wrapper">
              <span className="adverb">Username: </span>
              <div className="info">{login.username}</div>
            </div>
            <div className="info-wrapper">
              <span className="adverb">Email: </span>
              <div className="info"> {email}</div>
            </div>
            <div className="info-wrapper">
              <span className="adverb">Age: </span>
              <div className="info">{dob.age}</div>
            </div>
            <div className="info-wrapper">
              <span className="adverb">Phone: </span>
              <div className="info">{phone}</div>
            </div>
            <div className="info-wrapper">
              <span className="adverb">Location: </span>
              <div className="info"> {location.state}</div>
            </div>
            <div className="info-wrapper">
              <span className="adverb">Nationality: </span>
              <div className="info">{nat}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  location: PropTypes.object,
  isLoading: PropTypes.bool,
};
