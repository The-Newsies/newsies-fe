import { getSearchAll, getSearchByCategory } from '../services/newsApi';
import { FETCH_LOADING } from './loadingActions';

export const FETCH_SEARCH_ALL = 'FETCH_SEARCH_ALL';
export const fetchSearchAll = () => ({
  type: FETCH_SEARCH_ALL,
  payload: getSearchAll(),
  pendingType: FETCH_LOADING
});

export const FETCH_SEARCH_BY_CATEGORY = 'FETCH_SEARCH_BY_CATEGORY';
export const fetchSearchByCategory = () => ({
  type: FETCH_SEARCH_BY_CATEGORY,
  payload: getSearchByCategory(),
  pendingType: FETCH_LOADING
});
