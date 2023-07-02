import { useState, useCallback } from 'react';

import { generateWord } from '../utils';

export const useWord = (numberOfWords: number) => {
  const [word, setWord] = useState<string>(generateWord(numberOfWords));

  const updateWord = useCallback(() => {
    setWord(generateWord(numberOfWords));
  }, [numberOfWords]);

  return { word, updateWord };
};
