import { useState } from 'react';

import { BiTimer } from 'react-icons/bi';

type TimeCategoryProps = {
  time: number;
  setTime: (value: number) => void;
  restart: () => void;
};

const TimeCategory = ({ time, setTime, restart }: TimeCategoryProps) => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <BiTimer className='text-3xl' />
      <div className='flex gap-4 rounded-lg bg-secondary'>
        <span
          className={`category ${
            time === 15000 ? 'font-bold underline' : ''
          } hover:underline`}
          onClick={() => {
            setTime(15000);
            restart();
          }}
        >
          15s
        </span>
        <span
          className={`category ${
            time === 30000 ? 'font-bold underline' : ''
          } hover:underline`}
          onClick={() => {
            setTime(30000);
            restart();
          }}
        >
          30s
        </span>
        <span
          className={`category ${
            time === 60000 ? 'font-bold underline' : ''
          } hover:underline`}
          onClick={() => {
            setTime(60000);
            restart();
          }}
        >
          60s
        </span>
      </div>
    </div>
  );
};

export default TimeCategory;
