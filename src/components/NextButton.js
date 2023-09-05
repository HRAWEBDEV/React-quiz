const NextButton = ({ answer, onNext }) => {
 if (!answer) return null;
 return (
  <button className='btn btn-ui' onClick={onNext}>
   next
  </button>
 );
};

export default NextButton;
