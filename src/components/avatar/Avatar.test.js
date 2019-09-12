import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar component', () => {
  it('renders Avatar', () => {
    const wrapper = shallow(<Avatar image={'image url'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
