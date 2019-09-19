import collectionsReducer from './collectionsReducer';
import { fetchCollections } from '../actions/collectionsActions';

jest.mock('../services/collectionsApi.js', () => ({
  getCollections: () => ([{
    _id: null,
    name: 'Nypost.com',
    description: 'today is weds',
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
});
