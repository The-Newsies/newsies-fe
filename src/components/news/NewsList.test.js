import React from 'react';
import { shallow } from 'enzyme';
import NewsList from './NewsList';

describe('NewsList component', () => {
  it('renders NewsList', () => {
    const wrapper = shallow(<NewsList 
      news={[{
        title: 'Title',
        description: 'description',
        image: 'image url',
        author: 'author',
        date: 'date',
        sourceName: 'sourceName',
        sourceLink: 'sourceLink',
        tagColor: 'tagColor'
      }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
