'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export const SmoothScrollWrapper = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: .1,          // Controls the smoothness
        duration: 1,      // Duration of the scroll effect
      }}
    >
      {children}
    </ReactLenis>
  );
}; 
