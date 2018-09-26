import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 160h-48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v112H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zM128 48c0-8.82 7.18-16 16-16h96c8.82 0 16 7.18 16 16v112H128V48zm224 384c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V208c0-8.82 7.18-16 16-16h288c8.82 0 16 7.18 16 16v224zm-72-80H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm0-96H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSuitcaseRolling';
export default styled(icon);