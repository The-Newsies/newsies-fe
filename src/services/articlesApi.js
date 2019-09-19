import request from './request';
import placeholder from '../assets/newsPlaceholder.jpg';

export const postArticle = article => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  } = article;

  return request(`${process.env.API_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify({
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content
    })
  });
};

export const getArticlesByCollectionId = _id => {
  return request(`${process.env.API_URL}/articles/by-collection/${_id}`)
};
