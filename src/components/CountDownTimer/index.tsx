import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className='items-center justify-center flex flex-col'>
        <div className='flex sm:gap-2  gap-2'>
        <div className='text-2xl sm:text-xl font-medium text-slate-50'>{days} D</div>
        <div className='text-2xl sm:text-xl font-medium text-slate-50'>{hours} H</div>
        </div>
        <div className='flex sm:gap-2  gap-2'>
        <div className='text-xl font-medium text-slate-50'>{minutes} M</div>
        <div className='text-xl font-medium text-slate-50'>{seconds} S</div>
        </div>
      </div>
    );
  };

  return (
    <Countdown date={targetDate} renderer={renderer} />
  );
};

export default CountdownTimer;
