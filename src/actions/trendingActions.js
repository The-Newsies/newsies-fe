import { getTrending } from '../services/newsApi';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_LOADING = 'FETCH_LOADING';

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
  payload: getTrending(),
  pendingType: FETCH_LOADING
});

