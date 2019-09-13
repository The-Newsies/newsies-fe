let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const getTags = () => {
  return (
    fetch(`${process.env.API_URL}/tags`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if(!res.ok) throw 'Unable to retrieve tags';

        return res.json();
      })
      .then(tags => {
        return tags.map(tag => ({
          name: tag.name,
          color: tag.hexCode
        }));
      })
  );
};
