import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
};

export default Routes;
