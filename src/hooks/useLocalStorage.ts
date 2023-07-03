import { useState, useCallback } from 'react';

export const useLocalStorage = (key: string) => {
  const [time, setTime] = useState<number>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : 15000;
    } catch (error) {
      console.log(error);
      return 15000;
    }
  });

  const setLocalStorageValue = useCallback(
    (value: number) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        setTime(value);
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  const getLocalStorageValue = useCallback(() => {
    try {
      const value = window.localStorage.getItem(key);
      setTime(value ? JSON.parse(value) : 15000);
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return { time, setLocalStorageValue, getLocalStorageValue };
};
