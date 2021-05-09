import React from 'react';
import PropTypes from 'prop-types';
import './SingleUser.scss';
const SingleUser = ({ ...props }) => {
  return (
    <div className="single_user_wrapper" onClick={props.clickEvent}>
      <div className="single_user_inwrapper">
        <img src={props.picture} className="user_photo_thumbnail" />
        <div className="user_job">
          {/* iğrenç bi yöntem oldu */}
          {props.job !== ''
            ? props.job[(Math.random() * props.job.length - 1) | 1]
            : 'Unemployed'}
        </div>
        <div className="user_fullname">
          {props.name.first + ' ' + props.name.last || 'Yasin Çelebi'}
        </div>
        <div className="user_state">
          {props.location}, <span>{props.nat}</span>
        </div>{' '}
      </div>
    </div>
  );
};

export default SingleUser;
SingleUser.propTypes = {
  picture: PropTypes.string,
  job: PropTypes.array,
  name: PropTypes.object,
  location: PropTypes.string,
  nat: PropTypes.string,
  clickEvent: PropTypes.func,
  loadProfile: PropTypes.bool,
};
SingleUser.defaultProps = {
  picture: '',
  job: '',
  name: '',
  location: '',
  nat: '',
};
