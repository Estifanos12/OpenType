import { useState } from 'react';
import { useCountdown } from './useCountdown';
import { useLocalStorage } from './useLocalStorage';

export const useTimer = () => {
  const { getLocalStorageValue } = useLocalStorage();
  const [time, setTime] = useState(() => getLocalStorageValue('time') || 15000);
  const { countdown, resetCountdown, startCountdown } = useCountdown(time);

  return {
    time,
    setTime,
    countdown,
    resetCountdown,
    startCountdown,
  };
};
