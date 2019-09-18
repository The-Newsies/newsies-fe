import {
  fetchTags,
  FETCH_TAGS,
  SET_TAG,
  setTag
} from './tagsActions';

jest.mock('../services/tagsApi.js', () => ({
  getTags: () => Promise
}));

describe('tagsActions tests', () => {
  it('dispatches a fetch tags action', () => {
    const actionCreator = fetchTags();

    expect(actionCreator).toEqual({ type: FETCH_TAGS, payload: Promise });
  });

  it('dispatches a set tags action', () => {
    const actionCreator = setTag(name);

    expect(actionCreator).toEqual({ type: SET_TAG, payload: name });
  });
});

