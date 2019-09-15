import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import NewsViewToggle from '../newsView/NewsViewToggle';
import Avatar from '../avatar/Avatar';
import DropDownMenu from '../dropDownMenu/DropDownMenu';

export default function MyViewWrapper() {
  return (
    <div>
      <SearchBar />
      <NewsViewToggle />
      <Avatar />
      <DropDownMenu />
    </div>
  );
}
