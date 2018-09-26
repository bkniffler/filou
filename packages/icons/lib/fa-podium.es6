import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M440 160H96v-16c0-39.77 29.25-72.6 67.34-78.72C170.29 83.22 187.6 96 208 96h64c26.51 0 48-21.49 48-48S298.51 0 272 0h-64c-21.37 0-39.27 14.06-45.48 33.36C107.17 40.12 64 86.87 64 144v16H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56.09l.01 1.77L96 480H40c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-55.9L384 192h56c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM208 32h64c8.82 0 16 7.18 16 16s-7.18 16-16 16h-64c-8.82 0-16-7.18-16-16s7.18-16 16-16zm112 448H127.91l-.01-1.77L96 192h255.9L320 480z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPodium';
export default styled(icon);