import { getCollections, deleteArticleInCollection } from '../services/collectionsApi';

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS,
  payload: getCollections()
});

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const deleteArticle = (collectionId, articleId) => ({
  type: DELETE_ARTICLE,
  payload: deleteArticleInCollection(collectionId, articleId)
});
