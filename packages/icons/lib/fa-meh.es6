import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm-80-232c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm16 160H152c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMeh';
export default styled(icon);