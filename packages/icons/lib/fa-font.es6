import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M232.594 32h-17.187a11.998 11.998 0 0 0-11.239 7.796L51.473 448H28c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H87.913l44.651-120.46h182.253L360.063 448H332c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-23.473L243.833 39.796A12 12 0 0 0 232.594 32zm-87.958 263.34l75.696-201.241c1.5-3.857 2.714-7.827 3.668-11.427.95 3.589 2.159 7.544 3.651 11.382l75.098 201.286H144.636z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFont';
export default styled(icon);