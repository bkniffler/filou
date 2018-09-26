import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M48 480h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48zM32 80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80zm64 208h64v104c0 13.2 10.8 24 24 24h80c13.2 0 24-10.8 24-24V288h64c28.4 0 42.8-34.5 22.6-54.6l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128C53.3 253.5 67.5 288 96 288zm128-160l128 128h-96v128h-64V256H96l128-128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaArrowAltSquareUp';
export default styled(icon);