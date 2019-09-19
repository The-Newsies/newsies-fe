import { getSearchAll } from '../services/newsApi';
export const FETCH_LOADING_SEARCH = 'FETCH_LOADING_SEARCH';

export const FETCH_SEARCH_ALL = 'FETCH_SEARCH_ALL';
export const fetchSearchAll = (searchTerm) => ({
  type: FETCH_SEARCH_ALL,
  payload: getSearchAll(searchTerm),
  pendingType: FETCH_LOADING_SEARCH
});

export const SET_SEARCH_ARTICLES = 'SET_SEARCH_ARTICLES';
export const setSearchArticles = articles => ({
  type: SET_SEARCH_ARTICLES,
  payload: articles
});

export const SET_SEARCH_SORT_BY = 'SET_SEARCH_SORT_BY';
export const setSearchSortBy = sortBy => ({
  type: SET_SEARCH_SORT_BY,
  payload: sortBy
});


