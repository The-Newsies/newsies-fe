import React from 'react';
import { shallow } from 'enzyme';
import NewsItem from './NewsItem';

describe('NewsItem component', () => {
  it('renders NewsItem', () => {
    const wrapper = shallow(<NewsItem 
      title={'title'}  
      description={'description'}  
      date={'date'}
      author={'author'}
      sourceLink={'sourcelink'}
      sourceName={'sourcename'}
      image={'image'}
      tagColor={'tagColor'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
