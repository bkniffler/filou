import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm216 248c0 45.24-14.04 87.23-37.9 121.97L264 248.3V40.81C375.63 49.05 464 142.3 464 256zM232 40.81V248.3L69.9 377.97C46.04 343.23 32 301.24 32 256c0-113.7 88.37-206.95 200-215.19zM90.05 402.85L232 289.3v181.89c-55.93-4.13-105.9-29.59-141.95-68.34zM264 471.19V289.3l141.95 113.55C369.9 441.6 319.93 467.06 264 471.19z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPeace';
export default styled(icon);