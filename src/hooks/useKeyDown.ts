import { useState, useEffect, useCallback } from 'react';

const isAllowedCode = (code: string): boolean => {
  return code.startsWith('Key') || code === 'Backspace' || code === 'Space';
};

export const useKeyDown = (active: boolean) => {
  const [charTyped, setCharTyped] = useState<string>('');

  const handleKeyDown = useCallback(
    ({ key, code, preventDefault }: KeyboardEvent) => {
      //   preventDefault();
      if (!active || !isAllowedCode(code)) return;
      setCharTyped((prev) => prev + key);
    },
    [active]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return { charTyped };
};
