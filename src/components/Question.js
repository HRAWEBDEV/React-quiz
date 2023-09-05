const Question = ({ currentQuestion, answer, onAnswer }) => {
 const { question, options } = currentQuestion;
 return (
  <div>
   <h4>{question}</h4>
   <div className='options'>
    {options.map((option, index) => (
     <button
      key={option}
      className='btn btn-option'
      onClick={() => onAnswer(index)}
     >
      {option}
     </button>
    ))}
   </div>
  </div>
 );
};

export default Question;
