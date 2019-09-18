import request from './request';

export const getCollections = () => {
  return request(`${process.env.API_URL}/collections`);
};
