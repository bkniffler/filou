import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64h-48V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48v64c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48V96h48c8.81 0 16 7.17 16 16v96c0 8.83-7.19 16-16 16H256c-26.47 0-48 21.53-48 48v48h-16c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-16v-48c0-8.83 7.19-16 16-16h208c26.47 0 48-21.53 48-48v-96c0-26.47-21.53-48-48-48zm-80 0v48c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V48c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16v16zM256 480h-64V352h64v128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPaintRoller';
export default styled(icon);