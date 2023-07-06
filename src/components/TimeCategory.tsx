import { useContext } from 'react';

import { BiTimer } from 'react-icons/bi';

import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../types';

type TimeCategoryProps = {
  time: number;
  setTime: (value: number) => void;
  setLocalStorage: (key: string, value: number | Theme) => void;
  restart: () => void;
};

const TimeCategory = ({
  time,
  setTime,
  restart,
  setLocalStorage,
}: TimeCategoryProps) => {
  const { systemTheme } = useContext(ThemeContext);

  return (
    <div className='flex items-center justify-center gap-3'>
      <BiTimer className='text-3xl' />
      <div
        className='flex gap-4 rounded-lg'
        style={{
          backgroundColor: systemTheme.background.secondary,
        }}
      >
        <span
          className={`category ${
            time === 15000 ? 'font-bold underline' : ''
          } hover:underline`}
          onClick={() => {
            setTime(15000);
            setLocalStorage('time', 15000);
            restart();
          }}
          style={{
            color: time === 15000 ? systemTheme.text.secondary : '',
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
            setLocalStorage('time', 30000);
            restart();
          }}
          style={{
            color: time === 30000 ? systemTheme.text.secondary : '',
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
            setLocalStorage('time', 60000);
            restart();
          }}
          style={{
            color: time === 60000 ? systemTheme.text.secondary : '',
          }}
        >
          60s
        </span>
      </div>
    </div>
  );
};

export default TimeCategory;
