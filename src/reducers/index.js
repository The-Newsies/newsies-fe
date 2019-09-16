import { combineReducers } from 'redux';
import tags from './tagsReducer';
import trending from './trendingReducer';
import search from './searchReducer';

export default combineReducers({
  tags,
  trending,
  search
});
