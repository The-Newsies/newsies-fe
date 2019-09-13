import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';

describe('ModalContent component', () => {
  it('renders ModalContent', () => {
    const wrapper = shallow(<ModalContent isClosed={()=> {}} userName='Carlos' />);
    expect(wrapper).toMatchSnapshot();
  });
});
