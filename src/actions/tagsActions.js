import { getTags } from '../services/tagsApi';

export const FETCH_TAGS = 'FETCH_TAGS';
export const fetchTags = () => ({
  type: FETCH_TAGS,
  payload: getTags()
});

export const SET_TAG = 'SET_TAG';
export const setTag = (name) => ({
  type: SET_TAG,
  payload: name
});
