import {
  updateDisplay,
  UPDATE_DISPLAY
} from './displayActions';

describe('displayActions tests', () => {
  it('updates display', () => {
    const actionCreator = updateDisplay('trending');

    expect(actionCreator).toEqual({ 
      type: UPDATE_DISPLAY, 
      payload: 'trending' });
  });
});

