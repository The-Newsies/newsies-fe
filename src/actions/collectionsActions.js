import { getCollections } from '../services/collectionsApi';

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS,
  payload: getCollections()
});

