import placeholder from '../assets/newsPlaceholder.jpg';
// top headlines
export const getTrending = () => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch trending';
      return res.json();
    })
    .then(res => {
      return res.articles.map(article => ({
        ...article, 
        publishedAt: article.publishedAt.split('T')[0],
        author: !article.author ? 'unknown' : article.author, 
        urlToImage: !article.urlToImage ? placeholder : article.urlToImage
      }));
    });
};

// everything
// search for multiple terms at once -- implement later as stretch?
export const getSearchMultiple = (searchArray) => {
  let search = '';
  searchArray.forEach((searchTerm, i) => {
    search = search + searchTerm;
    if(searchArray.length - 1 !== i) {
      search = search + '%20OR%20';
    }
  });

  return fetch(`https://newsapi.org/v2/everything?q=%28${search}%29&${process.env.NEWS_API_KEY}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch trending';
      return res.json();
    })
    .then(res => {
      return res.articles.map(article => ({
        ...article, 
        publishedAt: article.publishedAt.split('T')[0],
        author: !article.author ? 'unknown' : article.author 
      }));
    });
};

// everything
export const getSearchAll = (searchTerm) => {
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWS_API_KEY}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch searchAll';
      return res.json();
    })
    .then(res => {
      return res.articles.map(article => ({
        ...article, 
        publishedAt: article.publishedAt.split('T')[0],
        author: !article.author ? 'unknown' : article.author 
      }));
    });
};

// top headlines
export const getSearchByCategory = (searchTerm, category = '') => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${searchTerm}&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch trending by search';
      return res.json();
    })
    .then(res => {
      return res.articles.map(article => ({
        ...article, 
        publishedAt: article.publishedAt.split('T')[0],
        author: !article.author ? 'unknown' : article.author 
      }));
    });
};
