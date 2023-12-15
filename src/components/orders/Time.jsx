import React, { useState, useEffect } from 'react';

const CountdownTimer = ({data}) => {
  const targetDate = new Date(data);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const calculateTimeDifference = (startDate, endDate) => {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingTime = timeDifference % (1000 * 60 * 60 * 24);
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return { days: daysDifference, hours, minutes, seconds };
  };

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const endDate = addDays(targetDate, 7);
  const timeDifference = calculateTimeDifference(currentTime, endDate);

  return (
    <div>     
         {timeDifference.days}:{timeDifference.hours}:{timeDifference.minutes}:{timeDifference.seconds}
    </div>
  );
};

export default CountdownTimer;