import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm92.5-12.5l115-115.1c4.7-4.7 12.3-4.7 17 0l115 115.1c4.7 4.7 4.7 12.3 0 17l-6.9 6.9c-4.7 4.7-12.5 4.7-17.1-.2L273 181.7V372c0 6.6-5.4 12-12 12h-10c-6.6 0-12-5.4-12-12V181.7l-82.5 85.6c-4.7 4.8-12.4 4.9-17.1.2l-6.9-6.9c-4.7-4.8-4.7-12.4 0-17.1z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaArrowCircleUp';
export default styled(icon);