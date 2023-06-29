import { useState } from 'react';

export const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState(0);

  const updateCursorPosition = (opt: 'increase' | 'decrease') => {
    if (opt === 'increase') setCursorPosition((cursor) => ++cursor);
    setCursorPosition((cursor) => --cursor);
  };

  return { cursorPosition, updateCursorPosition };
};
