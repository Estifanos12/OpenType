import { useState } from 'react';

export const useClipboard = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyTextToClipboard = async (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      alert('Cannot access clipboard');
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      alert('Sorry, cannot copy text to clipboard');
      return false;
    }
  };

  return { copiedText, copyTextToClipboard };
};
