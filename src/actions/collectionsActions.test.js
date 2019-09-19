import {
  FETCH_COLLECTIONS,
  fetchCollections,
  deleteArticle,
  DELETE_ARTICLE
} from './collectionsActions';

jest.mock('../services/collectionsApi.js', () => ({
  getCollections: () => Promise,
  deleteArticleInCollection: () => Promise
}));

describe('collections actions', () => {
  it('dispatches a fetch for our collections', () => {
    const actionCreator = fetchCollections();

    expect(actionCreator).toEqual({
      type: FETCH_COLLECTIONS,
      payload: Promise
    });
  });

  it('dispatches a delete fetch to remove an article from a collection', () => {
    const actionCreator = deleteArticle();

    expect(actionCreator).toEqual({
      type: DELETE_ARTICLE,
      payload: Promise
    });
  });
});
