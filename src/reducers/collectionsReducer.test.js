import collectionsReducer from './collectionsReducer';
import { fetchCollections, deleteCollection } from '../actions/collectionsActions';

jest.mock('../services/collectionsApi.js', () => ({
  getCollections: () => ([{
    _id: null,
    name: 'Nypost.com',
    description: 'today is weds',
    articleIds: []
  }]),

  deleteCollections: () => ([{
    _id: '456',
    name: 'npr.com',
    description: 'to be deleted',
    articleIds: []
  }])
}));

describe('collectionsReducer', () => {
  it('returns default state', () => {
    const state = [];

    const action = {
      type: 'Conchas',
      payload: 'mmmmmm'
    };

    const newState = collectionsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('return collections and updates state', () => {
    const state = [];

    const action = fetchCollections();

    const newState = collectionsReducer(state, action);
    expect(newState).toEqual([{
      _id: null,
      name: 'Nypost.com',
      description: 'today is weds',
      articleIds: []
    }]);
  });

  it('deletes a collection from the array', () => {
    const state = [{
      _id: '456',
      name: 'npr.com',
      description: 'to be deleted',
      articleIds: []
    },

    {
      _id: '123',
      name: 'Nypost.com',
      description: 'today is thurs',
      articleIds: []
    }];

    const action = deleteCollection('456');

    const newState = collectionsReducer(state, action);
    expect(newState).toEqual([{
      _id: '123',
      name: 'Nypost.com',
      description: 'today is thurs',
      articleIds: []
    }]);
  });
});
