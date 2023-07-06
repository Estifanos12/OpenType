import { Theme } from '../types/index';

export const useLocalStorage = () => {
  const setLocalStorageValue = (key: string, value: number | Theme) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert('Something went wrong');
    }
  };

  const getLocalStorageValue = (key: string) => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  };

  return { setLocalStorageValue, getLocalStorageValue };
};
