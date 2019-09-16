import { FETCH_TRENDING, FETCH_LOADING_TRENDING } from '../actions/trendingActions';

const initialState = {
  articles: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRENDING:
      return { ...state, articles: action.payload, loading: false };
    case FETCH_LOADING_TRENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
