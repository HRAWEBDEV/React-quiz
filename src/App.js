import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import { useEffect, useReducer } from 'react';
import { storeReducer, initialStore } from './reducer/storeReducer';

const App = () => {
 const [store, dispatch] = useReducer(storeReducer, initialStore);
 const { status, questions, index } = store;
 const currentQuestion = questions[index];

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

 const handleStart = () => {
  dispatch({
   type: 'CHANGE_STATUS',
   payload: 'start',
  });
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
    {status === 'ready' && (
     <StartScreen questionsCount={questions.length} onStart={handleStart} />
    )}
    {status === 'start' && <Question currentQuestion={currentQuestion} />}
   </Main>
  </div>
 );
};

export default App;
