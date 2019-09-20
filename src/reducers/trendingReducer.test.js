import trendingReducer from './trendingReducer';

import {
  fetchTrending,
  fetchSearchByCategory,
  setTrendingArticles
} from '../actions/trendingActions';

const article = {
  source: {
    id: null,
    name: 'Nypost.com'
  },
  author: 'Jackie Salo',
  title: 'Vaping mom left in coma from mystery lung illness - New York Post ',
  description: 'A Texas mom of three says that her vaping habit was to blame for a mysterious lung illness that left her in a coma. Sherie Canada of Abilene took to social media after a 24-day hospital stint to wa…',
  url: 'https://nypost.com/2019/09/15/vaping-mom-left-in-coma-from-mystery-lung-illness/',
  urlToImage: 'https://thenypost.files.wordpress.com/2019/09/canada-mom-coma.jpg?quality=90&strip=all&w=1200',
  publishedAt: '2019-09-15T20:08:00Z',
  content: 'A Texas mom of three says that her vaping habit was to blame for a mysterious lung illness that left her in a coma.\r\nSherie Canada of Abilene took to social media after a 24-day hospital stint to warn others that e-cigarettes “nearly killed” her.\r\n“You have n… [+1636 chars]'
};

jest.mock('../services/newsApi.js', () => {
  const article = {
    source: {
      id: null,
      name: 'Nypost.com'
    },
    author: 'Jackie Salo',
    title: 'Vaping mom left in coma from mystery lung illness - New York Post ',
    description: 'A Texas mom of three says that her vaping habit was to blame for a mysterious lung illness that left her in a coma. Sherie Canada of Abilene took to social media after a 24-day hospital stint to wa…',
    url: 'https://nypost.com/2019/09/15/vaping-mom-left-in-coma-from-mystery-lung-illness/',
    urlToImage: 'https://thenypost.files.wordpress.com/2019/09/canada-mom-coma.jpg?quality=90&strip=all&w=1200',
    publishedAt: '2019-09-15T20:08:00Z',
    content: 'A Texas mom of three says that her vaping habit was to blame for a mysterious lung illness that left her in a coma.\r\nSherie Canada of Abilene took to social media after a 24-day hospital stint to warn others that e-cigarettes “nearly killed” her.\r\n“You have n… [+1636 chars]'
  };
  return {
    getTrending: () => ([article]),
    getSearchByCategory: () => ([article])
  };
});

describe('trendingReducer', () => {
  it('returns default state', () => {
    const state = {
      articles: [],
      loading: false
    };

    const action = {
      type: 'Conchas',
      payload: 'mmmmmm'
    };

    const newState = trendingReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns trending and updates state', () => {
    const state = {
      articles: [],
      loading: false
    };

    const action = fetchTrending();

    const newState = trendingReducer(state, action);
    expect(newState).toEqual({
      articles: [article],
      loading: false
    });
  });

  it('returns searchByCategory state and updates state', () => {
    const state = {
      articles: [],
      loading: false
    };

    const action = fetchSearchByCategory();

    const newState = trendingReducer(state, action);
    expect(newState).toEqual({
      articles: [article],
      loading: false
    });
  });

  it('updates articles and state', () => {
    const state = {
      articles: [],
      loading: false
    };

    const action = setTrendingArticles([{ hi: 'mmmmmm' }]);

    const newState = trendingReducer(state, action);
    expect(newState).toEqual({
      articles: [{ hi: 'mmmmmm' }],
      loading: false
    });
  });
});
