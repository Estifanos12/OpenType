import { faker } from '@faker-js/faker';

export const isAllowedCode = (code: string): boolean => {
  return code.startsWith('Key') || code === 'Backspace' || code === 'Space';
};

export const generateWord = (n: number): string => {
  return faker.word.words(n);
};
