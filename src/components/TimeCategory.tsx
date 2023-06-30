import { useState } from 'react';

type TimeCategoryProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  updateWords: () => void;
};

const TimeCategory = ({ setTime, updateWords }: TimeCategoryProps) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className='flex justify-center items-center gap-3'>
      <div className='flex gap-4 bg-secondary rounded-lg'>
        <span
          className={`category ${
            selected === 1 ? 'underline font-bold' : ''
          } hover:underline`}
          onClick={() => {
            setTime(15000);
            updateWords();
            setSelected(1);
          }}
        >
          15s
        </span>
        <span
          className={`category ${
            selected === 2 ? 'underline font-bold' : ''
          } hover:underline`}
          onClick={() => {
            setTime(30000);
            updateWords();
            setSelected(2);
          }}
        >
          30s
        </span>
        <span
          className={`category ${
            selected === 3 ? 'underline font-bold' : ''
          } hover:underline`}
          onClick={() => {
            setTime(60000);
            updateWords();
            setSelected(3);
          }}
        >
          60s
        </span>
      </div>
    </div>
  );
};

export default TimeCategory;
