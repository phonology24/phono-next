'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export const SmoothScrollWrapper = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // Controls the smoothness
        duration: 1.5,      // Duration of the scroll effect
        smoothTouch: true,  // Enable smooth scrolling on touch devices
        touchMultiplier: 1.5, // Adjust sensitivity for mobile scroll
      }}
    >
      {children}
    </ReactLenis>
  );
}; 
