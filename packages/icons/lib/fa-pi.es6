import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M444.79 385.6l-12.82-9.6a7.997 7.997 0 0 0-11.2 1.61l-20.75 27.72C395 412.02 387 416 378.66 416c-14.69 0-26.66-11.97-26.66-26.67V128h88c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H27.33c-4.24 0-8.31 1.69-11.31 4.69L2.36 114.34C-2.68 119.38.89 128 8.02 128H128v131.46c0 32.99-9.27 65.31-26.75 93.28l-46.58 74.53a8 8 0 0 0 2.54 11.02l13.56 8.48a8.006 8.006 0 0 0 11.03-2.54l46.6-74.57A207.927 207.927 0 0 0 160 259.47V128h160v258.87c0 20.63 9.6 40.73 27.02 51.79 27.57 17.5 61.15 9.08 78.61-14.12l20.78-27.73c2.64-3.55 1.92-8.56-1.62-11.21z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPi';
export default styled(icon);