import {
  FETCH_COLLECTIONS,
  fetchCollections
} from './collectionsActions';

jest.mock('../services/collectionsApi.js', () => ({
  getCollections: () => Promise,
}));

describe('collections actions', () => {
  it('dispatches a fetch for our collections', () => {
    const actionCreator = fetchCollections();

    expect(actionCreator).toEqual({
      type: FETCH_COLLECTIONS,
      payload: Promise
    });
  });
});
