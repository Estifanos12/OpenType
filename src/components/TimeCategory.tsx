import React from 'react';

type TimeCategoryProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

const TimeCategory = ({ setTime }: TimeCategoryProps) => {
  return (
    <div className='flex gap-10'>
      <span className='span' onClick={() => setTime(15000)}>
        15
      </span>
      <span className='span' onClick={() => setTime(30000)}>
        30
      </span>
      <span className='span' onClick={() => setTime(60000)}>
        60
      </span>
    </div>
  );
};

export default TimeCategory;
