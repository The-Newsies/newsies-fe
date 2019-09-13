import { getTags } from '../services/tagsApi';

export const FETCH_TAGS = 'FETCH_TAGS';
export const fetchTags = () => ({
  type: FETCH_TAGS,
  payload: getTags()
});
