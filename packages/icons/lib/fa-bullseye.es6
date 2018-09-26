import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 92c-90.65 0-164 73.36-164 164 0 90.65 73.36 164 164 164 90.65 0 164-73.36 164-164 0-90.65-73.36-164-164-164zm0 296c-72.79 0-132-59.21-132-132s59.21-132 132-132 132 59.21 132 132-59.21 132-132 132zm0-212c-44.11 0-80 35.89-80 80s35.89 80 80 80 80-35.89 80-80-35.89-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm0-296C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBullseye';
export default styled(icon);