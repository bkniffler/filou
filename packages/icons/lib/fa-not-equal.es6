import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376 160h-54.06l38.56-38.56 21.16-21.16c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L254.06 160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h198.06l-96 96H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h54.06L2.34 411.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L129.94 352H376c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H177.94l96-96H376c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaNotEqual';
export default styled(icon);