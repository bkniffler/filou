import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 320c-44.18 0-80 35.82-80 80 0 44.19 35.83 80 80 80 44.19 0 80-35.84 80-80 0-44.18-35.82-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWifi1';
export default styled(icon);