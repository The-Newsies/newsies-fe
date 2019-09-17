import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import MyNews from '../pages/MyNews';
import { withSession } from '../Auth0Provider';
import './App.css';
import Search from '../pages/Search';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/myNews' component={withSession(MyNews)} />
          <Route path='/trending' component={withSession(Landing)} />
          <Route path='/search' component={withSession(Search)} />
        </Switch>
      </Router>
    </>
  );
}
