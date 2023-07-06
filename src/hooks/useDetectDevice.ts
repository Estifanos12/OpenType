import { useState } from 'react';

import { isMobile } from '../utils';

export const useDetectDevice = () => {
  const [isMobileDevice] = useState(() => isMobile());

  return isMobileDevice;
};
