import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M216 24.008c0-23.796-31.162-33.11-44.149-13.038C76.548 158.255 200 238.729 200 288c0 22.056-17.944 40-40 40s-40-17.944-40-40V182.126c0-19.388-21.854-30.757-37.731-19.684C30.754 198.379 0 257.279 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-192.853-168-295.992zM192 480c-88.224 0-160-71.776-160-160 0-46.944 20.68-97.745 56-128v96c0 39.701 32.299 72 72 72s72-32.299 72-72c0-65.106-112-128-45.411-248C208 160 352 175.3 352 320c0 88.224-71.776 160-160 160z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFire';
export default styled(icon);