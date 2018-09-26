import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505.24 274.49l-48.4-96.8A32 32 0 0 0 428.22 160H128v-16c0-39.77 29.25-72.6 67.34-78.72C202.29 83.22 219.6 96 240 96h64c26.51 0 48-21.49 48-48S330.51 0 304 0h-64c-21.37 0-39.27 14.06-45.48 33.36C139.17 40.12 96 86.87 96 144v16H83.78a32 32 0 0 0-28.62 17.69l-48.4 96.8A63.874 63.874 0 0 0 0 303.11V352c0 17.67 14.33 32 32 32h160v96h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-56v-96h160c17.67 0 32-14.33 32-32v-48.89c0-9.94-2.31-19.74-6.76-28.62zM240 32h64c8.82 0 16 7.18 16 16s-7.18 16-16 16h-64c-8.82 0-16-7.18-16-16s7.18-16 16-16zM83.78 192h344.45l48 96H35.78l48-96zM288 480h-64v-96h64v96zm192-128H32v-32h448v32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaKeynote';
export default styled(icon);