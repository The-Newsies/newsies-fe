export const getTags = () => {
  return fetch('URL WILL GO HERE')
    .then(res => {
      if(!res.ok) throw 'Unable to retrieve tags';

      return res.json();
    })
    .then(tags => {
      return tags.map(tag => ({
        name: tag.name,
        color: tag.color
      }));
    });
};
