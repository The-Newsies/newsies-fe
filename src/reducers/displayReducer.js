import { UPDATE_DISPLAY } from '../actions/displayActions';

export default function reducer(state = 'trending', action) {
  switch(action.type) {
    case UPDATE_DISPLAY:
      return action.payload;
    default:
      return state;
  }
}
