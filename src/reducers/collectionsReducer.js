import { FETCH_COLLECTIONS, DELETE_COLLECTIONS } from '../actions/collectionsActions';

export default function result(state = [], action) {
  switch(action.type) {
    case FETCH_COLLECTIONS:
      return action.payload;
    case DELETE_COLLECTIONS: 
      return state.filter(collection => {
        return action.payload._id !== collection._id;
      });
    default:
      return state;
  }
}
