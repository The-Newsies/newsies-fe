import { getDisplay } from './displaySelector';

describe('displaySelector tests', () => {
  it('gets display from state', () => {
    const state = {
      display: 'trending'
    };

    const display = getDisplay(state);

    expect(display).toEqual('trending');
  });
});
