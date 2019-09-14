import request from './request';

export const getTags = () => {
  return (
    request(`${process.env.API_URL}/tags`)
      .then(tags => {
        return tags.map(tag => ({
          _id: tag._id,
          name: tag.name,
          color: tag.hexCode
        }));
      })
  );
};
