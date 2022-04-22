import React from 'react';
import Auth from './auth/auth';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './layouts/Login';

function App() {
  const token = useSelector(state => state.user.token);

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/login'>
          {token ? <Login/> : <Redirect to ="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;