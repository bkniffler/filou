import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM48 448c-8.82 0-16-7.18-16-16V80c0-8.82 7.18-16 16-16h352c8.82 0 16 7.18 16 16v352c0 8.82-7.18 16-16 16H48zm208-280v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h144c4.42 0 8-3.58 8-8zm96 96v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8zm-160 96v-16c0-4.42-3.58-8-8-8h-80c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPollH';
export default styled(icon);