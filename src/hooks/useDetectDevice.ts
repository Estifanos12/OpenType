import { useState, useEffect } from 'react';

import { isMobile } from '../utils';

export const useDetectDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(() => isMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(isMobile());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileDevice;
};
