import React from 'react';
import { shallow } from 'enzyme';
import NewsListCollected from './NewsListCollected';

describe('NewsListCollected component', () => {
  it('renders NewsListCollected', () => {
    const wrapper = shallow(<NewsListCollected 
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