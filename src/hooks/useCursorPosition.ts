import { useState } from 'react';

export const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState(0);

  const updateCursorPosition = (opt: 'increase' | 'decrease') => {
    if (opt === 'increase') setCursorPosition((cursor) => cursor + 1);
    setCursorPosition((cursor) => cursor - 1);
  };

  return { cursorPosition, updateCursorPosition };
};
