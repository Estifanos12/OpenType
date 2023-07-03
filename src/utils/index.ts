import { faker } from '@faker-js/faker';

export const isAllowedCode = (code: string): boolean => {
  return code.startsWith('Key') || code === 'Backspace' || code === 'Space';
};

export const generateWord = (n: number): string => {
  return faker.word.words(n);
};

export const calculateAccuracy = (expectedWord: string, typedWord: string) => {
  console.log(expectedWord, typedWord);
  const words = expectedWord.split(' ');
  const typedWords = typedWord.split(' ');
  let correctWords = 0;

  typedWords.forEach((word, index) => {
    if (word === words[index]) {
      correctWords++;
    }
  });
  return (correctWords / typedWords.length) * 100;
};

export const calculateWPM = (typedWord: string, time: number) => {
  const words = typedWord.split(' ');
  const minutes = time / 60000;
  return words.length / minutes;
};

export const calculateErrorPercentage = (accuracy: number) => {
  return 100 - accuracy;
};
