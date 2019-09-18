import { FETCH_COLLECTIONS } from '../actions/collectionsActions';

export default function result(state = [], action) {
  switch(action.type) {
    case FETCH_COLLECTIONS:
      return action.payload;
    default:
      return state;
  }
}
