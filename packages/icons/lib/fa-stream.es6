import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M8 128h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm496 112H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-64 144H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaStream';
export default styled(icon);