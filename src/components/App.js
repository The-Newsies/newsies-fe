import React from 'react';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import NewsList from './news/NewsList';
import TagsList from './tags/TagsList';
import Avatar from '../components/avatar/Avatar';
import placeholder from '../assets/placeholder.png';

export default function App() {
  return (
    <>
      <Header />
      <Avatar image={placeholder} />
      <SearchBar />
      <NewsList
        news={[
          {
            title: 'Title',
            description: 'description',
            image: 'image url',
            author: 'author',
            date: 'date',
            sourceName: 'sourceName',
            sourceLink: 'sourceLink',
            tagColor: 'tagColor'
          }
        ]}
      />
      <TagsList tags={[{ name: 'sports', color: 'sdfsdfs' }]} />
    </>
  );
}
