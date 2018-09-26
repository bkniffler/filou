import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zM98.9 385.2c0-13.3 4.2-61.2 93.1-161.2 88.9 100 93.1 147.9 93.1 161.2 0 48.5-28.9 84.1-72.4 92.7-6.8.8-13.5 2.1-20.7 2.1s-13.9-1.2-20.7-2.1c-43.5-8.5-72.4-44.2-72.4-92.7zm212 39.7c3.7-12.4 6.2-25.5 6.2-39.7 0-80.9-112.7-195.5-125.1-209.4-12.9 14.5-125.1 128.6-125.1 209.4 0 14.2 2.5 27.3 6.2 39.7-25.8-31.3-41.1-74-41.1-124.4 0-90.8 122.6-215.8 160-251.9 37.4 36 160 161.1 160 251.9 0 50.4-15.3 93.1-41.1 124.4z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBurn';
export default styled(icon);