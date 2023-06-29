import React from 'react';

type TimeCategoryProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  updateWords: () => void;
};

const TimeCategory = ({ setTime, updateWords }: TimeCategoryProps) => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <h2 className='font-mono text-xl'>Time Category</h2>
      <div className='flex gap-4 bg-secondary rounded-lg'>
        <span
          className='category'
          onClick={() => {
            setTime(15000);
            updateWords();
          }}
        >
          15
        </span>
        <span
          className='category'
          onClick={() => {
            setTime(30000);
            updateWords();
          }}
        >
          30
        </span>
        <span
          className='category'
          onClick={() => {
            setTime(60000);
            updateWords();
          }}
        >
          60
        </span>
      </div>
    </div>
  );
};

export default TimeCategory;
