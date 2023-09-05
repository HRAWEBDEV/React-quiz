const NextButton = ({ answer, onNext, index, questionsCount }) => {
 if (answer === undefined) return null;
 return (
  <button className='btn btn-ui' onClick={onNext}>
   {index + 1 === questionsCount ? 'finish' : 'next'}
  </button>
 );
};

export default NextButton;
