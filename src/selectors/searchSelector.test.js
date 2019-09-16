import { getSearchResults, getLoading } from './searchSelector';

describe('searchSelector tests', () => {
  it('gets search results from state', () => {
    const state = { 
      search: {
        articles: [
          {
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
          }
        ],
        loading: false
      }
    };

    const searchResults = getSearchResults(state);

    expect(searchResults).toEqual([
      {
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
      }
    ]);
  });
  it('gets loading from state', () => {
    const state = { 
      search: {
        articles: [
          {
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
          }
        ],
        loading: false
      }
    };

    const loading = getLoading(state);

    expect(loading).toEqual(false);
  });
});
