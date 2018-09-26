import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 64h-88.581c.375-2.614.581-5.283.581-8 0-30.879-25.122-56-56-56s-56 25.121-56 56c0 2.717.205 5.386.581 8H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V112c0-8.822 7.178-16 16-16h48v20c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12V96h48c8.822 0 16 7.178 16 16v352zM192 32c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaClipboard';
export default styled(icon);