import {
  fetchTags,
  FETCH_TAGS
} from './tagsActions';

jest.mock('../services/tagsApi.js', () => ({
  getTags: () => Promise
}));

describe('tagsActions tests', () => {
  it('dispatches a fetch tags action', () => {
    const actionCreator = fetchTags();

    expect(actionCreator).toEqual({ type: FETCH_TAGS, payload: Promise });
  });
});

