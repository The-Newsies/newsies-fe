import tagsReducer from './tagsReducer';

describe('tagsReducer', () => {
  it('returns default state', () => {
    const state = [{ name: '', color: '' }];

    const action = {
      type: 'Conchas',
      payload: 'mmmmmm'
    };

    const newState = tagsReducer(state, action);
    expect(newState).toEqual(state);
  });
});
