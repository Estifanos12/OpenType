import { faker } from '@faker-js/faker';

export const isAllowedCode = (code: string): boolean => {
  return (
    code.startsWith('Key') ||
    code === 'Backspace' ||
    code === 'Space' ||
    code === 'Minus'
  );
};

export const isMobile = () => {
  const userAgent = navigator.userAgent;

  const mobileUserAgents = [
    'Android',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ];

  for (let i = 0; i < mobileUserAgents.length; i++) {
    if (userAgent.indexOf(mobileUserAgents[i]) !== -1) {
      return true;
    }
  }

  return false;
};

export const generateWord = (n: number): string => {
  return faker.word.words(n);
};

export const calculateAccuracy = (expectedWord: string, typedWord: string) => {
  let correctWords = 0;
  for (let i = 0; i < typedWord.length; i++) {
    if (typedWord[i] === expectedWord[i]) {
      correctWords++;
    }
  }
  return (correctWords / typedWord.length) * 100;
};

export const calculateWPM = (
  typedWord: string,
  expectedWord: string,
  time: number
) => {
  const words = expectedWord.slice(0, typedWord.length).split(' ');
  const minutes = time / 60000;
  const results = {
    wpm: words.length / minutes,
    cpm: typedWord.length / minutes,
  };
  return results;
};

export const calculateErrorPercentage = (accuracy: number) => {
  return 100 - accuracy;
};
