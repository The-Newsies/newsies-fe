import {
  fetchSearchAll,
  setSearchArticles,
  FETCH_SEARCH_ALL,
  FETCH_LOADING_SEARCH,
  SET_SEARCH_ARTICLES
} from './searchActions';

jest.mock('../services/newsApi.js', () => ({
  getSearchAll: () => Promise
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

  it('updates search articles', () => {
    const actionCreator = setSearchArticles([{}]);

    expect(actionCreator).toEqual({ 
      type: SET_SEARCH_ARTICLES, 
      payload: [{}],
    });
  });
});
