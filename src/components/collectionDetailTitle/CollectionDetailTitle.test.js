import React from 'react';
import { shallow } from 'enzyme';
import CollectionDetailTitle from './CollectionDetailTitle';

describe('CollectionDetailTitle component', () => {
  it('renders CollectionDetailTitle', () => {
    const wrapper = shallow(<CollectionDetailTitle name='title' description='were' />);
    expect(wrapper).toMatchSnapshot();
  });
});
