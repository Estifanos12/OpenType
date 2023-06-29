import { useEffect, useState, useRef } from 'react';

export const useCountdown = (initialValue: number, interval = 1000) => {
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const [countdown, setCountdown] = useState(initialValue);

  const startCountdown = () => {
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - interval;
        }
        if (prev === 0) clearInterval(intervalRef.current!);

        return prev;
      });
    }, interval);
  };

  const resetCountdown = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setCountdown(initialValue);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current!);
  }, [interval]);

  return { countdown, startCountdown, resetCountdown };
};
