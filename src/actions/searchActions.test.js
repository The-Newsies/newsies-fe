import {
  fetchSearchAll,
  FETCH_SEARCH_ALL,
  FETCH_LOADING_SEARCH
} from './searchActions';

jest.mock('../services/newsApi.js', () => ({
  getSearchAll: () => Promise,
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
});
