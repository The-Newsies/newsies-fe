import { getTags } from './tagsSelector';

describe('tagsSelector tests', () => {
  it('gets tags from state', () => {
    const state = {
      tags: [
        { name: 'arts', color: '#FFFF', _id: 'n453i4' }, 
        { name: 'science', color: '#000000', _id: '44nk3j' }
      ]
    };

    const tags = getTags(state);

    expect(tags).toEqual([
      { name: 'arts', color: '#FFFF', _id: 'n453i4' }, 
      { name: 'science', color: '#000000', _id: '44nk3j' }
    ]);
  });
});
