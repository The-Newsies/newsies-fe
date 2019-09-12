import React from 'react';
import { shallow } from 'enzyme';
import TagsList from './TagsList';

describe('TagsList component', () => {
  it('renders TagsList', () => {
    const wrapper = shallow(<TagsList tags={[{ name: 'art', color: 'werwer' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
