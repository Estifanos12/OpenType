import { Theme } from '../types/index';

export const useLocalStorage = () => {
  const setLocalStorageValue = (key: string, value: number | Theme) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getLocalStorageValue = (key: string) => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(error);
    }
  };

  return { setLocalStorageValue, getLocalStorageValue };
};
