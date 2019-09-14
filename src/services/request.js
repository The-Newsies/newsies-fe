let token = null;
export const setToken = newToken => {
  token = newToken;
};

export default (url, options = {}) => {
  options.headers =  {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
  return (
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          res.json().then(error => { throw error; });
        }
        return res.json();
      })
  );
};
