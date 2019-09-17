import { getSearchAll } from '../services/newsApi';
export const FETCH_LOADING_SEARCH = 'FETCH_LOADING_SEARCH';

export const FETCH_SEARCH_ALL = 'FETCH_SEARCH_ALL';
export const fetchSearchAll = (searchTerm) => ({
  type: FETCH_SEARCH_ALL,
  payload: getSearchAll(searchTerm),
  pendingType: FETCH_LOADING_SEARCH
});


