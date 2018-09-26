import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M608 96H32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128c0-17.67-14.33-32-32-32zm0 288H32V128h576v256zM80 272h208c8.84 0 16-7.16 16-16v-80c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80c0 8.84 7.16 16 16 16zm8-88h192v64H88v-64zM72 360h224c4.42 0 8-3.58 8-8v-8c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v8c0 4.42 3.58 8 8 8zm272 0h224c4.42 0 8-3.58 8-8v-8c0-4.42-3.58-8-8-8H344c-4.42 0-8 3.58-8 8v8c0 4.42 3.58 8 8 8zM80 288c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H80zm64 0c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-16zm64 0c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-16zm64 0c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-16z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDigitalTachograph';
export default styled(icon);