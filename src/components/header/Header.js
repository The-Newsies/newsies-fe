import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import LandingWrapper from './LandingWrapper';
import MyViewWrapper from './MyViewWrapper';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Newzie</h1>
      {!isAuthenticated ? <LandingWrapper /> : <MyViewWrapper />}
    </div>
  );
}
