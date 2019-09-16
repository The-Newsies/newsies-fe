import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NewsViewToggle() {
  return (
    <span>
      <NavLink to='/trending' activeStyle={{ fontWeight: 'bold', color: 'white', background: 'red' }}>Trending</NavLink>
      <NavLink to='/myNews' activeStyle={{ fontWeight: 'bold', color: 'white', background: 'red' }}>My News</NavLink>
    </span>
  );
}

