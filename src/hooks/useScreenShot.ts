import { useRef } from 'react';
import * as Screenshot from 'use-react-screenshot';

export const useScreenShot = () => {
  const ref = useRef(null);
  const [image, takeScreenShot] = Screenshot.useScreenshot({
    type: 'image/png',
    quality: 1.0,
  });

  const getImage = () => {
    takeScreenShot(ref.current);
  };

  return { ref, image, getImage };
};
