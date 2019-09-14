let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const getUsers = () => {
  return (
    fetch(`${process.env.API_URL}/users`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if(!res.ok) throw 'Unable to retrieve users';

        return res.json();
      })
  );
};

export const postUser = (name, avatar) => {
  return (
    fetch(`${process.env.API_URL}/users`,
      {
        method: 'POST',
        body: JSON.stringify({ name, avatar }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if(!res.ok) throw 'Unable to post user';

        return res.json();
      })
  );
};

