import { FETCH_SEARCH_ALL, FETCH_SEARCH_BY_CATEGORY, FETCH_LOADING_SEARCH } from '../actions/searchActions';

const initialState = {
  articles: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SEARCH_ALL:
      return { ...state, articles: action.payload, loading: false };
    case FETCH_SEARCH_BY_CATEGORY:
      return { ...state, articles: action.payload, loading: false };
    case FETCH_LOADING_SEARCH:
      return { ...state, loading: true };
    default:
      return state;
  }
}
