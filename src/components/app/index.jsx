import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { addPlayerPath, loginPath, registerPath, rootPath, rosterPath } from '../../constants/paths';
import { AddPlayerPage } from '../add-player-page';
import { HomePage } from '../home-page';
import { LoginPage } from '../login-page';
import { RegisterPage } from '../register-page';
import { RosterPage } from '../roster-page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={AddPlayerPage} exact path={addPlayerPath} />
      <Route component={HomePage} exact path={rootPath} />
      <Route component={LoginPage} exact path={loginPath} />
      <Route component={RegisterPage} exact path={registerPath} />
      <Route component={RosterPage} exact path={rosterPath} />
    </Switch>
  </BrowserRouter>
);

export { App };
