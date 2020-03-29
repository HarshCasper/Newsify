import actionTypes from '../constants/actionTypes';

const categories = [
  { value: 'technology', name: 'Technology' },
  { value: 'business', name: 'Business' },
  { value: 'entertainment', name: 'Entertainment' },
  { value: 'gaming', name: 'Gaming' },
  { value: 'health-and-medical', name: 'Health and Medical' },
  { value: 'general', name: 'General' },
  { value: 'music', name: 'Music' },
  { value: 'politics', name: 'Politics' },
  { value: 'science-and-nature', name: 'Science and Nature' },
  { value: 'sport', name: 'Sports' }
];


const categoryReducer = (state = { categories, currentCategory: categories[0] }, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.category };
    default:
      return state;
  }
};

export default categoryReducer;

