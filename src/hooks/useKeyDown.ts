import { useState, useEffect, useCallback } from 'react';

import { useCursorPosition } from './useCursorPosition';
import { isAllowedCode } from '../utils';

type TypingState = 'idle' | 'start' | 'typing';

export const useKeyDown = (active: boolean) => {
  const [typingState, setTypingState] = useState<TypingState>('idle');
  const [charTyped, setCharTyped] = useState<string>('');
  const [totalCharacterTyped, setTotalCharacterTyped] = useState<string>('');

  const { cursorPosition, updateCursorPosition, resetCursorPointer } =
    useCursorPosition();

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!active || !isAllowedCode(code)) return;

      if (key === 'Backspace') {
        if (charTyped.length > 0 && cursorPosition > 0) {
          setCharTyped((prev) => prev.slice(0, charTyped.length - 1));
          setTotalCharacterTyped((prev) =>
            prev.slice(0, totalCharacterTyped.length - 1)
          );
          updateCursorPosition('decrease');
        }
        return;
      }

      if (typingState === 'idle') {
        setTypingState('start');
      }

      setCharTyped((prev) => prev + key);
      setTotalCharacterTyped((prev) => prev + key);
      updateCursorPosition('increase');
    },
    [
      active,
      charTyped.length,
      cursorPosition,
      updateCursorPosition,
      typingState,
      totalCharacterTyped,
    ]
  );

  const resetCharTyped = useCallback(() => {
    setCharTyped('');
  }, [setCharTyped]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return {
    charTyped,
    totalCharacterTyped,
    setTotalCharacterTyped,
    cursorPosition,
    resetCharTyped,
    resetCursorPointer,
    typingState,
    setTypingState,
  };
};
