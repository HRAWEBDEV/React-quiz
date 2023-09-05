const StartScreen = ({ questionsCount, onStart }) => {
 return (
  <div className='start'>
   <h2>welcome to the react quiz !</h2>
   <h3>{questionsCount} qestion to test your mastery</h3>
   <button className='btn btn-ui' onClick={onStart}>
    lets start
   </button>
  </div>
 );
};

export default StartScreen;
