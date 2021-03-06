import { combineReducers } from 'redux';
import tags from './tagsReducer';
import trending from './trendingReducer';
import search from './searchReducer';
import display from './displayReducer';
import collections from './collectionsReducer';

export default combineReducers({
  tags,
  trending,
  search,
  display,
  collections
});
