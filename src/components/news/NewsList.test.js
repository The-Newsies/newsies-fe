import React from 'react';
import { shallow } from 'enzyme';
import NewsList from './NewsList';

describe('NewsList component', () => {
  it('renders NewsList', () => {
    const wrapper = shallow(<NewsList 
      news={[{
        title: 'Title',
        description: 'description',
        urlToImage: 'image url',
        publishedAt: 'date',
        source: {
          name: 'name',
          id: 'ddgdgd'
        },
        url: 'sourceLink'
      }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
