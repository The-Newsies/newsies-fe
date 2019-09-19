import React from 'react';
import { shallow } from 'enzyme';
import CollectionList from './CollectionList';

describe('CollectionList component', () => {
  it('renders CollectionList', () => {
    const wrapper = shallow(<CollectionList 
      collections={[{
        name: 'Title',
        description: 'description',
        _id: 'id'
      }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
