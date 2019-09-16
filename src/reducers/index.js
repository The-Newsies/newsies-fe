import { combineReducers } from 'redux';
import tags from './tagsReducer';
import trending from './trendingReducer';

export default combineReducers({
  tags,
  trending
});
