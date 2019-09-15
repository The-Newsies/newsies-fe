import React from 'react';
import { shallow } from 'enzyme';
import Tag from './Tag';

describe('Tag component', () => {
  it('renders Tag', () => {
    const wrapper = shallow(<Tag 
      name={'Science'} 
      color={'FFF'}
      handleClick={() => {}}
      _id={'erereet'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});


