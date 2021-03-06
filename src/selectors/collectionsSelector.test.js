import { getUserCollections, deleteUserCollection } from './collectionsSelector';

describe('collectionsSelector tests', () => {
  it('gets the collections from state', () => {
    const state = {
      collections: [{ _id: null,
        name: 'Nypost.com',
        description: 'today is weds',
        articleIds: []
      }]
    };

    const collections = getUserCollections(state);

    expect(collections).toEqual([{ _id: null,
      name: 'Nypost.com',
      description: 'today is weds',
      articleIds: []
    }]);
  });

  it('deletes a collection from state', () => {
    const state = {
      collections: [{ 
        _id: null,
        name: 'Nypost.com',
        description: 'today is weds',
        articleIds: []
      }]
    };
  
    const collections = deleteUserCollection(state);

    expect(collections).toEqual([{ 
      _id: null,
      name: 'Nypost.com',
      description: 'today is weds',
      articleIds: []
    }]);
  });
});
