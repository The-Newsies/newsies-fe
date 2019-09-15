import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import avatar from '../../assets/earth.png';

export default function Avatar() {
  const { user } = useAuth0();
  return (
    <div>
      {user ? <img src={user.picture} /> 
        : <img src={avatar} />}
    </div>
  );
}
