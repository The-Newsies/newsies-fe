import {
  fetchTrending,
  FETCH_TRENDING,
  fetchSearchByCategory,
  FETCH_SEARCH_BY_CATEGORY,
  FETCH_LOADING_TRENDING
} from './trendingActions';

jest.mock('../services/newsApi.js', () => ({
  getTrending: () => Promise,
  getSearchByCategory: () => Promise
}));

describe('trendingActions tests', () => {
  it('dispatches a fetch trending action', () => {
    const actionCreator = fetchTrending();

    expect(actionCreator).toEqual({ 
      type: FETCH_TRENDING, 
      payload: Promise,
      pendingType: FETCH_LOADING_TRENDING
    });
  });

  it('dispatches a fetch for search by category', () => {
    const actionCreator = fetchSearchByCategory();

    expect(actionCreator).toEqual({
      type: FETCH_SEARCH_BY_CATEGORY,
      payload: Promise,
      pendingType: FETCH_LOADING_TRENDING
    });
  });
});
