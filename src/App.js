import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';

import { useEffect, useReducer } from 'react';
const initialStore = {
 questions: [],
 status: 'ready',
};

const storeReducer = (state, { type, payload }) => {
 if (type === 'SET_DATA') {
  return {
   ...state,
   question: payload,
  };
 }
 if (type === 'CHANGE_STATUS') {
  return {
   ...state,
   status: payload,
  };
 }

 return { ...state };
};

const App = () => {
 const [store, dispatch] = useReducer(storeReducer, initialStore);
 const { status, questions } = store;

 const getQusetions = async () => {
  dispatch({ type: 'CHANGE_STATUS', payload: 'loading' });
  try {
   const result = await fetch('http://localhost:8000/questions');
   const data = await result.json();
   dispatch({ type: 'CHANGE_STATUS', payload: 'ready' });
   dispatch({ type: 'SET_DATA', payload: data });
  } catch (err) {
   dispatch({ type: 'CHANGE_STATUS', payload: 'error' });
  }
 };

 useEffect(() => {
  getQusetions();
 }, []);

 return (
  <div className='app'>
   <Header />
   <Main>
    {status === 'loading' && <Loader />}
    {status === 'error' && <Error />}
    {status === 'ready' && <StartScreen />}
   </Main>
  </div>
 );
};

export default App;
