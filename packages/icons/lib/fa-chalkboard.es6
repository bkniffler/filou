import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M632 448h-24V64c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.33-32 32v384H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-344 0v-64h192v64H288zm224 0v-64c0-17.67-14.33-32-32-32H288c-17.67 0-32 14.33-32 32v64H64V64h512v384h-64z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaChalkboard';
export default styled(icon);