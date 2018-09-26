import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M170.65 447.65C255.69 442.15 320 367.74 320 282.52V72c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v211.48c0 68.11-51.28 127.67-119.24 132.22C94.24 420.7 32 361.48 32 288V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v216c0 91.89 77.46 165.69 170.65 159.65z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUnion';
export default styled(icon);