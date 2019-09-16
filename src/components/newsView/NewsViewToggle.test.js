import React from 'react';
import { shallow } from 'enzyme';
import NewsViewToggle from './NewsViewToggle';

describe('NewsViewToggle component', () => {
  it('renders NewsViewToggle', () => {
    const wrapper = shallow(<NewsViewToggle handleMyNewsView={() => { }} handleTrendingView={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
