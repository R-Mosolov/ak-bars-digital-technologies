// Redux dependencies
import { createStore } from 'redux';
import reducer from './reducer';



// Set initial state
let initialState = [];

// Set actions
const searchByNames = () => ({ type: 'SEARCH_BY_NAMES' });

// Create reducer
// TODO: Change this algorithm
const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'SEARCH_BY_NAMES':
      return initialState.filter((manuscript) => {
        if (
          manuscript.type === utils.getLabelById(MONOGRAPH, MANUSCRIPT_TYPES)
          || manuscript.type === utils.getLabelById(TEACHING_AID, MANUSCRIPT_TYPES)
        ) {
          return true;
        }
      });

    default:
      return initialState;
  }
};

// Create store
const store = createStore(reducer);

export {
  store,
};
