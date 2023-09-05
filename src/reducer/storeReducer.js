const initialStore = {
 questions: [],
 status: 'ready',
 index: 0,
 answers: [],
};

const storeReducer = (state, { type, payload }) => {
 if (type === 'SET_DATA') {
  return {
   ...state,
   questions: payload,
  };
 }
 if (type === 'CHANGE_STATUS') {
  return {
   ...state,
   status: payload,
  };
 }
 if (type === 'NEXT') {
  return {
   ...state,
   index: ++state.index,
  };
 }
 if (type === 'ADD_ANSWER') {
  return {
   ...state,
   answers: [...state.answers, payload],
  };
 }
 return { ...state };
};

export { storeReducer, initialStore };
