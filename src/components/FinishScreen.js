const FinishScreen = ({ points, totalPoints, onReset }) => {
 const percentage = (points / totalPoints) * 100;
 return (
  <>
   <p className='result'>
    you scored <strong>{points}</strong> out of {totalPoints} |{' '}
    {Math.ceil(percentage)}%
   </p>
   <button className='btn btn-ui' onClick={onReset}>
    reset quiz
   </button>
  </>
 );
};

export default FinishScreen;
