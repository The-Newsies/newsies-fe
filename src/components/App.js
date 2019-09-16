import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import MyNews from '../pages/MyNews';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/myNews' component={MyNews} />
          <Route path='/trending' component={Landing} />
        </Switch>
      </Router>
    </>
  );
}
