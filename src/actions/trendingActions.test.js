import {
  fetchTrending,
  FETCH_TRENDING,
  FETCH_LOADING_TRENDING
} from './trendingActions';

jest.mock('../services/newsApi.js', () => ({
  getTrending: () => Promise
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
});
