import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from './CollectionItem';

describe('CollectionItem component', () => {
  it('renders CollectionItem', () => {
    const wrapper = shallow(<CollectionItem 
      title='Title'
      description='description'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});