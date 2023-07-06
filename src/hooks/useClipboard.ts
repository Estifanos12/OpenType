import { useState } from 'react';

export const useClipboard = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyTextToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
      alert('Cannot access clipboard');
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      alert('Sorry, cannot copy text to clipboard');
    }
  };

  return { copiedText, copyTextToClipboard };
};
