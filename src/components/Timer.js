import { useEffect, useState } from 'react';

const Timer = ({ onTimeOut }) => {
 const [secondsRemaining, setSecondsRemaining] = useState(360);
 const minutes = Math.floor(secondsRemaining / 60);
 const seconds = secondsRemaining - minutes * 60;
 !minutes && !seconds && onTimeOut();
 useEffect(() => {
  const intervalId = setInterval(() => {
   setSecondsRemaining((prev) => prev - 1);
  }, 1000);
  return () => {
   clearInterval(intervalId);
  };
 }, []);
 return (
  <div className='timer'>
   {minutes}:{seconds}
  </div>
 );
};

export default Timer;
