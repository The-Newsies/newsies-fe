
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
        author: !article.author ? 'unknown' : article.author 
      }));
    });
};
