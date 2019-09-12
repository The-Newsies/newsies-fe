import React from 'react';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import NewsList from './news/NewsList';

export default function App() {
  return (
    <>
      <Header />
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
    </>
  );
}
