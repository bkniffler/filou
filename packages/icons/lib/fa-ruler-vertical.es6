import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224 0H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM32 480V32h192v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64H32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaRulerVertical';
export default styled(icon);