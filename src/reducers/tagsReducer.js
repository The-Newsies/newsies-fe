import { FETCH_TAGS } from '../actions/tagsActions';

const initialState = [{ name: '', color: '' }];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TAGS:
      return action.payload;
    default:
      return state;
  }
}
