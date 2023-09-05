const Progress = ({ index, questionsCount, points, totalPoints }) => {
 return (
  <header className='progress'>
   <progress value={index + 1} max={questionsCount} />
   <p>
    question <strong>{index + 1}</strong> / {questionsCount}
   </p>
   <p>
    <strong>{points}</strong> / {totalPoints}
   </p>
  </header>
 );
};

export default Progress;
