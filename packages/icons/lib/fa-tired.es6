import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm113.8-322.3l-80 48c-7.8 4.7-7.8 15.9 0 20.6l80 48c11.6 6.9 24-7.7 15.4-18L343.6 208l33.6-40.3c8.6-10.3-3.8-24.8-15.4-18zM134.2 266.3l80-48c7.8-4.7 7.8-15.9 0-20.6l-80-48c-11.6-6.9-24 7.7-15.4 18l33.6 40.3-33.6 40.3c-8.6 10.3 3.8 24.9 15.4 18zM248 272c-51.9 0-115.3 43.8-123.2 106.7-.8 6.3.9 12.7 4.6 16.9.6.7 5.8 6.7 13.2 3.6 25.9-11.1 64.4-17.4 105.5-17.4s79.6 6.3 105.5 17.4c5.5 2.4 10.5-.5 13.2-3.6 3.6-4.2 5.3-10.6 4.6-16.9C363.3 315.8 299.9 272 248 272zm0 77.7c-30.6 0-59.5 3.2-84.3 9.1 15.8-32.5 53-54.8 84.3-54.8 31.3 0 68.5 22.3 84.3 54.8-24.8-5.9-53.6-9.1-84.3-9.1z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTired';
export default styled(icon);