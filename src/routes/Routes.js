import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import Profile from '../components/Profile/Profile';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/:username" component={Profile} />
      </Switch>
    </div>
  );
};

export default Routes;
