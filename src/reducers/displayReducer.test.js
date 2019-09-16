import displayReducer from './displayReducer';
import {
  updateDisplay
} from '../actions/displayActions';

describe('displayReducer', () => {
  it('returns default state', () => {
    const state = '';

    const action = {
      type: 'Conchas',
      payload: 'mmmmmm'
    };

    const newState = displayReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns display and updates state', () => {
    const state = '';

    const action = updateDisplay('trending');

    const newState = displayReducer(state, action);
    expect(newState).toEqual('trending');
  });
});
