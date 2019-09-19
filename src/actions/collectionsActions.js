import { getCollections, deleteCollections } from '../services/collectionsApi';

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS,
  payload: getCollections()
});

export const DELETE_COLLECTIONS = 'DELETE_COLLECTIONS';
export const deleteCollection = collectionId => ({
  type: DELETE_COLLECTIONS,
  payload: deleteCollections(collectionId)
});
