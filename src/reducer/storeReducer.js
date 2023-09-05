const initialStore = {
 questions: [],
 status: 'ready',
 index: 0,
 points: 0,
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
   index: state.index + 1,
  };
 }
 if (type === 'ADD_ANSWER') {
  const { correctOption, points } = state.questions[state.index];
  return {
   ...state,
   answers: [...state.answers, payload],
   points: payload === correctOption ? state.points + points : state.points,
  };
 }
 if (type === 'RESET') {
  return {
   ...initialStore,
   questions: state.questions,
  };
 }
 return state;
};

export { storeReducer, initialStore };
