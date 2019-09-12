import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('renders SearchBar', () => {
    const wrapper = shallow(<SearchBar text={'hello'} handleOnChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
