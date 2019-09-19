import request from './request';

export const getCollections = () => {
  return request(`${process.env.API_URL}/collections`);
};

export const postCollection = (name, description) => {
  return (
    request(`${process.env.API_URL}/collections`,
      {
        method: 'POST',
        body: JSON.stringify({ name, description }),
      })
  );
};

export const patchArticleToCollection = (articleId, collectionId) => {
  return (
    request(`${process.env.API_URL}/collections/${collectionId}/add-article/`,
      {
        method: 'PATCH',
        body: JSON.stringify({ articleId })
      }
    )
  );
};

export const getAllCollections = () => {
  return request(`${process.env.API_URL}/collections`);
};
