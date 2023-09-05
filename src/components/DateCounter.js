import { useReducer } from 'react';

const initialState = {
 count: 0,
 step: 1,
};

const reducer = (state, { type, payload }) => {
 switch (type) {
  case 'DEC':
   return { ...state, count: state.count - state.step };
  case 'INC':
   return { ...state, count: state.count + state.step };
  case 'SET_COUNT':
   return { ...state, count: payload };
  case 'SET_STEP':
   return { ...state, step: payload };
  case 'RESET':
   return { ...initialState };
  default:
   throw new Error('unknown action');
 }
};

function DateCounter() {
 const [state, dispatch] = useReducer(reducer, { ...initialState });
 const { count, step } = state;
 // This mutates the date object.
 const date = new Date('june 21 2027');
 date.setDate(date.getDate() + count);

 const dec = function () {
  dispatch({ type: 'DEC' });
 };

 const inc = function () {
  dispatch({ type: 'INC' });
 };

 const defineCount = function (e) {
  dispatch({ type: 'SET_COUNT', payload: Number(e.target.value) });
 };

 const defineStep = function (e) {
  dispatch({ type: 'SET_STEP', payload: Number(e.target.value) });
 };

 const reset = function () {
  dispatch({ type: 'RESET' });
 };

 return (
  <div className='counter'>
   <div>
    <input type='range' min='0' max='10' value={step} onChange={defineStep} />
    <span>{step}</span>
   </div>

   <div>
    <button onClick={dec}>-</button>
    <input value={count} onChange={defineCount} />
    <button onClick={inc}>+</button>
   </div>

   <p>{date.toDateString()}</p>

   <div>
    <button onClick={reset}>Reset</button>
   </div>
  </div>
 );
}
export default DateCounter;
