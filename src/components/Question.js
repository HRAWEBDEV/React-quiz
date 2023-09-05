const Question = ({ currentQuestion, answer, onAnswer }) => {
 const { question, options, correctOption } = currentQuestion;
 return (
  <div>
   <h4>{question}</h4>
   <div className='options'>
    {options.map((option, index) => (
     <button
      className={`btn btn-option ${
       answer !== undefined && index === answer ? 'answer' : ''
      }  ${
       answer !== undefined && index === correctOption ? 'correct' : 'wrong'
      }`}
      key={option}
      onClick={() => onAnswer(index)}
      disabled={answer !== undefined}
     >
      {option}
     </button>
    ))}
   </div>
  </div>
 );
};

export default Question;
