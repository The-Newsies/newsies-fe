import { getTags, currentTag } from './tagsSelector';

describe('tagsSelector tests', () => {
  it('gets tags from state', () => {
    const state = {
      tags: { tags: [
        { name: 'arts', color: '#FFFF', _id: 'n453i4' }, 
        { name: 'science', color: '#000000', _id: '44nk3j' }
      ],
      selectedTag: '' }
    };

    const tags = getTags(state);

    expect(tags).toEqual([
      { name: 'arts', color: '#FFFF', _id: 'n453i4' }, 
      { name: 'science', color: '#000000', _id: '44nk3j' }
    ]);
  });

  it('gets selectedTag from state', () => {
    const state = {
      tags: { tags: [
        { name: 'arts', color: '#FFFF', _id: 'n453i4' }, 
        { name: 'science', color: '#000000', _id: '44nk3j' }
      ],
      selectedTag: 'science' }
    };

    const tags = currentTag(state);

    expect(tags).toEqual('science');
  });
});
