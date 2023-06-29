import { useEffect } from 'react';

type CountdownProps = {
  countdown: number;
  reset: () => void;
};

const Countdown = ({ countdown, reset }: CountdownProps) => {
  useEffect(() => {
    reset();
  }, [reset]);

  const formatedCountdown = {
    minutes: new Date(countdown).getUTCMinutes(),
    seconds: new Date(countdown).getUTCSeconds(),
  };

  return (
    <div className='flex justify-end py-5'>
      <div className='bg-secondary p-3 rounded-lg'>
        <span className='text-lg font-mono text-right'>
          {formatedCountdown.minutes < 10
            ? `0${formatedCountdown.minutes}`
            : formatedCountdown.minutes}
          :
          {formatedCountdown.seconds < 10
            ? `0${formatedCountdown.seconds}`
            : formatedCountdown.seconds}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
