import { useState } from 'react';
import { CursorPosition } from './useKeyDown';

export const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState(0);

  const resetCursorPointer = () => setCursorPosition(0);

  const updateCursorPosition = (opt: 'increase' | 'decrease') => {
    if (opt === CursorPosition.INCREASE) setCursorPosition((cursor) => cursor + 1);
    else setCursorPosition((cursor) => cursor - 1);
  };

  return { cursorPosition, updateCursorPosition, resetCursorPointer };
};
