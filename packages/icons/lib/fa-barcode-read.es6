import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M152 0H8C3.6 0 0 3.6 0 8v152c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V32h120c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm0 480H32V352c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v152c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM632 0H488c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h120v128c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm0 344h-16c-4.4 0-8 3.6-8 8v128H488c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V352c0-4.4-3.6-8-8-8zM152 96h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm336 320h48c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8zM408 96h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm-192 0h-16c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm64 0h-16c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBarcodeRead';
export default styled(icon);