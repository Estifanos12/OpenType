import { useCallback, useState } from 'react';

import { useCountdown } from './useCountdown';
import { useCursorPosition } from './useCursorPosition';
import { useKeyDown } from './useKeyDown';
import { useModal } from './useModal';
import { useWord } from './useWord';

export const useTyping = () => {
  const [time, setTime] = useState(15000);
  const [wordContainerFocused, setWordContainerFocused] = useState(false);
  const { countdown, resetCountdown, startCountdown } = useCountdown(time);
  const { word, updateWord } = useWord(30);
  const { charTyped, resetCharTyped, typingState, setTypingState } =
    useKeyDown(wordContainerFocused);
  const { cursorPosition, resetCursorPointer } = useCursorPosition();
  const { modalIsOpen, openModal, closeModal } = useModal();

  const restartTest = useCallback(() => {
    resetCountdown();
    updateWord();
    resetCursorPointer();
    resetCharTyped();
    setTypingState('idle');
  }, [
    resetCountdown,
    updateWord,
    resetCursorPointer,
    resetCharTyped,
    setTypingState,
  ]);

  const checkCharacter = useCallback(
    (index: number) => {
      if (charTyped[index] === word[index]) {
        return true;
      } else {
        return false;
      }
    },
    [charTyped, word]
  );

  if (word.length === charTyped.length) {
    updateWord();
    resetCharTyped();
    resetCursorPointer();
  }

  if (typingState === 'start') {
    startCountdown();
    setTypingState('typing');
  }

  if (countdown === 0) {
    // setTime(time);
    // setTypingState('idle');
    // setWordContainerFocused(false);]
    // TODO: Add a modal to show the results
    openModal();
    restartTest();
  }

  return {
    word,
    wordContainerFocused,
    setWordContainerFocused,
    charTyped,
    countdown,
    resetCountdown,
    time,
    setTime,
    updateWord,
    cursorPosition,
    restartTest,
    checkCharacter,
    modalIsOpen,
    closeModal,
    openModal,
  };
};
