import {
  FETCH_COLLECTIONS,
  fetchCollections,
  DELETE_COLLECTIONS,
  deleteCollection
} from './collectionsActions';

jest.mock('../services/collectionsApi.js', () => ({
  getCollections: () => Promise,
  deleteCollections: () => Promise
}));

describe('collections actions', () => {
  it('dispatches a fetch for our collections', () => {
    const actionCreator = fetchCollections();

    expect(actionCreator).toEqual({
      type: FETCH_COLLECTIONS,
      payload: Promise
    });
  });

  it('dispatchs a delete for collection', () => {
    const actionCreator = deleteCollection();

    expect(actionCreator).toEqual({
      type: DELETE_COLLECTIONS,
      payload: Promise
    });
  });
});
