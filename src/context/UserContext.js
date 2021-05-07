import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { UserReducer } from '../reducer/UserReducer';
export const UserContext = createContext();
const initialState = {
  user: [],
  loading: false,
  error: '',
  job: [],
};
export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const { user, loading, error, job } = state;
  const fetchData = () => {
    dispatch({ type: 'START_FETCH' });
    axios
      .get('https://randomuser.me/api/?results=50')
      .then((res) =>
        dispatch({ type: 'SUCCESS_FETCH', payload: res.data.results })
      )
      .catch((err) => dispatch({ type: 'ERROR_FETCH', payload: err }));
    axios
      .get('http://api.dataatwork.org/v1/jobs?limit=50')
      .then((res) => dispatch({ type: 'SUCCESS_JOB_FETCH', payload: res.data }))
      .catch((err) => dispatch({ type: 'ERROR_FETCH', payload: err }));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{ user, loading, error, job }}>
      {props.children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node,
};
UserProvider.defaultProps = {
  children: null,
};
