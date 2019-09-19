import { getTrending, getSearchByCategory } from '../services/newsApi';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_LOADING_TRENDING = 'FETCH_LOADING_TRENDING';

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
  payload: getTrending(),
  pendingType: FETCH_LOADING_TRENDING
});

export const FETCH_SEARCH_BY_CATEGORY = 'FETCH_SEARCH_BY_CATEGORY';
export const fetchSearchByCategory = (searchTerm, category) => ({
  type: FETCH_SEARCH_BY_CATEGORY,
  payload: getSearchByCategory(searchTerm, category),
  pendingType: FETCH_LOADING_TRENDING
});

export const SET_TRENDING_ARTICLES = 'SET_TRENDING_ARTICLES';
export const setTrendingArticles = articles => ({
  type: SET_TRENDING_ARTICLES,
  payload: articles
});

export const SET_TRENDING_SORT_BY = 'SET_TRENDING_SORT_BY';
export const setTrendingSortBy = sortBy => ({
  type: SET_TRENDING_SORT_BY,
  payload: sortBy
});
