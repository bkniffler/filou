import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M160 8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v152h96V8zm128 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm96 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h32V8zm96 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm96 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zM416 504c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-64 0c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V352h-32v152zm-288 0c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V352H64v152zm160 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm288 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm120-264H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBarcodeScan';
export default styled(icon);