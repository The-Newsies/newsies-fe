import React from 'react';
import { shallow } from 'enzyme';
import TagsList from './TagsList';

describe('TagsList component', () => {
  it('renders TagsList', () => {
    const wrapper = shallow(<TagsList 
      selected='' 
      tags={[
        { name: 'art', 
          color: 'werwer', 
          _id: 'erereet' 
        }]} 
      setSelectedTag={() => {}} 
      fetchByCategory={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
