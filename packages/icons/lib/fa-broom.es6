import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M509.7 13.7L498.3 2.3c-3.1-3.1-8.2-3.1-11.3 0L348.2 141.2l-35.5-35.5c-8.6-8.6-21.1-11.7-32.6-8.4-11.6 3.3-20.5 12.7-23.2 24.4l-11.6 50.4-222.6 74.2C11.7 250 3.6 258.9.9 270.1c-2.7 11.2.7 22.9 8.8 31.1l201.1 201c.3.3 12.1 13.2 31.1 8.8 11.3-2.7 20.2-10.8 23.8-21.8l74.2-222.6 50.4-11.6c11.7-2.7 21.1-11.6 24.4-23.2 3.3-11.6.1-24.1-8.4-32.6l-35.5-35.5L509.7 25c3.1-3.2 3.1-8.2 0-11.3zM233.4 479.6l-99-100.2 36.1-72.3-72 36-65.7-66.5 221.8-73.9 54.6 54.6-75.8 222.3zm149.7-255.8l-50.5 11.7-56.1-56.1 11.7-50.5 1.9-.6 93 95.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBroom';
export default styled(icon);