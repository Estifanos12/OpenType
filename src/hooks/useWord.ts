import { useState, useCallback } from 'react';

import { faker } from '@faker-js/faker';

const generateWord = (n: number): string => {
  return faker.word.words(n);
};

export const useWord = (numberOfWords: number) => {
  const [word, setWord] = useState<string>(generateWord(numberOfWords));

  const updateWord = useCallback(() => {
    setWord(generateWord(numberOfWords));
  }, [numberOfWords]);

  return { word, updateWord };
};
