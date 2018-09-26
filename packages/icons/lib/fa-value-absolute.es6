import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M24 32H8c-4.42 0-8 3.58-8 8v432c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V40c0-4.42-3.58-8-8-8zm416 0h-16c-4.42 0-8 3.58-8 8v432c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V40c0-4.42-3.58-8-8-8zM325.66 165.65l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0L224 233.37l-79.03-79.03c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L201.38 256l-79.03 79.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L224 278.62l79.03 79.03c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L246.62 256l79.03-79.03a8.006 8.006 0 0 0 .01-11.32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaValueAbsolute';
export default styled(icon);