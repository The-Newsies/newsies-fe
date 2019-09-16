import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import MyNews from '../pages/MyNews';
import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/myNews' component={withSession(MyNews)} />
          <Route path='/trending' component={withSession(Landing)} />
        </Switch>
      </Router>
    </>
  );
}
