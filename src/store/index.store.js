// // Redux dependencies
// import { createStore } from 'redux';
// import reducer from './reducer';

// // Set initial state
// const initialState = [

// ];

// // Set actions
// const searchByNames = () => ({ type: 'SEARCH_BY_NAMES' });

// // Create reducer
// const reducer = (state = initialState, action) => {
//   const { type } = action;

//   switch (type) {
//     case 'FILTER_BY_LARGE_MANUSCRIPTS':
//       return initialState.filter((manuscript) => {
//         if (
//           manuscript.type === utils.getLabelById(MONOGRAPH, MANUSCRIPT_TYPES)
//           || manuscript.type === utils.getLabelById(TEACHING_AID, MANUSCRIPT_TYPES)
//         ) {
//           return true;
//         }
//       });

//     default:
//       return initialState;
//   }
// };

// // Create store
// const store = createStore(reducer);

// export {
//   store,
// };
