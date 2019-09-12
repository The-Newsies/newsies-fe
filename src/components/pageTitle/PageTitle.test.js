import React from 'react';
import { shallow } from 'enzyme';
import PageTitle from './PageTitle';

describe('PageTitle component', () => {
  it('renders PageTitle', () => {
    const wrapper = shallow(<PageTitle title={'title'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
