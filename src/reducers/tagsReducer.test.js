import tagsReducer from './tagsReducer';
import {
  fetchTags
} from '../actions/tagsActions';

jest.mock('../services/tagsApi.js', () => ({
  getTags: () => ([{ name: 'sports', color: 'FFFFF', _id: 'j5fy79' }])
}));

describe('tagsReducer', () => {
  it('returns default state', () => {
    const state = [{ name: '', color: '', _id: '' }];

    const action = {
      type: 'Conchas',
      payload: 'mmmmmm'
    };

    const newState = tagsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns tags and updates state', () => {
    const state = [{ name: '', color: '', _id:'' }];

    const action = fetchTags();

    const newState = tagsReducer(state, action);
    expect(newState).toEqual([{ name: 'sports', color: 'FFFFF', _id: 'j5fy79' }]);
  });
});
