import { FETCH_TAGS, SET_TAG } from '../actions/tagsActions';

const initialState = {
  tags: [{ name: '', color: '', _id: '' }],
  selectedTag: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TAGS:
      return { ...state, tags: action.payload };
    case SET_TAG:
      return { ...state, selectedTag: action.payload };
    default:
      return state;
  }
}
