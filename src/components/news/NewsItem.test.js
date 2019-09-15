import React from 'react';
import { shallow } from 'enzyme';
import NewsItem from './NewsItem';

describe('NewsItem component', () => {
  it('renders NewsItem', () => {
    const wrapper = shallow(<NewsItem 
      title={'title'}  
      description={'description'}  
      publishedAt={'publishedAt'}
      author={'author'}
      url={'url'}
      source={'source'}
      urlToImage={'urlToImage'}
      tagColor={'tagColor'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
