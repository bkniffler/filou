import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M632 352h-24V224c0-26.51-21.49-48-48-48h-44.8L419.21 56.02A63.99 63.99 0 0 0 369.24 32H256c-17.67 0-32 14.33-32 32v112H80c-26.51 0-48 21.49-48 48v128H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72c0 53.02 42.98 96 96 96s96-42.98 96-96h96c0 53.02 42.98 96 96 96s96-42.98 96-96h72c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM256 64h113.24c9.78 0 18.88 4.38 24.99 12.01L474.22 176H256V64zm-80 384c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm288 0c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm112-96h-21.88c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H266.12c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H64V224c0-8.82 7.18-16 16-16h480c8.82 0 16 7.18 16 16v128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTruckPickup';
export default styled(icon);