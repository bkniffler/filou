import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 288h-32c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h32c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zm32 127.88c0 17.68-14.36 32.06-32 32.06h-32V320.06h32c17.64 0 32 14.38 32 32.06v63.76zM160 288h-32c-35.35 0-64 28.71-64 64.12v63.76C64 451.29 92.65 480 128 480h32c17.67 0 32-14.35 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm0 159.94h-32c-17.64 0-32-14.38-32-32.06v-63.76c0-17.68 14.36-32.06 32-32.06h32v127.88zM256 32C114.84 32 0 146.85 0 288v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V288C32 164.48 132.5 64 256 64s224 100.48 224 224v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V288c0-141.15-114.84-256-256-256z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHeadphonesAlt';
export default styled(icon);