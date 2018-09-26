import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm221.5 416l-442.8.68C44 409.75 32 365.26 32 320 32 178.84 146.84 64 288 64s256 114.84 256 256c0 45.26-12 89.75-34.5 128zM288 288c-26.09 0-48.44 15.66-58.41 38.05L98.62 304.22c-8.53-1.48-16.94 4.44-18.41 13.16s4.44 16.95 13.16 18.41l131.2 21.87C227.47 390.3 254.59 416 288 416c35.35 0 64-28.65 64-64s-28.65-64-64-64zm0 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTachometerSlowest';
export default styled(icon);