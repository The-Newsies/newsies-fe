import {
  fetchSearchAll,
  fetchSearchByCategory,
  FETCH_SEARCH_ALL,
  FETCH_SEARCH_BY_CATEGORY,
  FETCH_LOADING_SEARCH
} from './searchActions';

jest.mock('../services/newsApi.js', () => ({
  getSearchAll: () => Promise,
  getSearchByCategory: () => Promise
}));

describe('search actions', () => {
  it('dispatches a fetch for search all', () => {
    const actionCreator = fetchSearchAll();

    expect(actionCreator).toEqual({ 
      type: FETCH_SEARCH_ALL, 
      payload: Promise,
      pendingType: FETCH_LOADING_SEARCH
    });
  });

  it('dispatches a fetch for search by category', () => {
    const actionCreator = fetchSearchByCategory();

    expect(actionCreator).toEqual({
      type: FETCH_SEARCH_BY_CATEGORY,
      payload: Promise,
      pendingType: FETCH_LOADING_SEARCH
    });
  });
});