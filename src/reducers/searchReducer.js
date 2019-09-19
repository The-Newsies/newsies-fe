import { 
  FETCH_SEARCH_ALL,
  FETCH_LOADING_SEARCH, 
  SET_SEARCH_ARTICLES
} from '../actions/searchActions';

const initialState = {
  articles: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SEARCH_ALL:
      return { ...state, articles: action.payload, loading: false };
    case FETCH_LOADING_SEARCH:
      return { ...state, loading: true };
    case SET_SEARCH_ARTICLES: 
      return { ...state, articles: action.payload };
    default:
      return state;
  }
}
