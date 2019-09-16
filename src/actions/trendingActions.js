import { getTrending } from '../services/newsApi';
import { FETCH_LOADING } from './loadingActions';

export const FETCH_TRENDING = 'FETCH_TRENDING';

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
  payload: getTrending(),
  pendingType: FETCH_LOADING
});

