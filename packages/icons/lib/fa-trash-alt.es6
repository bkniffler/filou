import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M336 64l-33.6-44.8C293.3 7.1 279.1 0 264 0h-80c-15.1 0-29.3 7.1-38.4 19.2L112 64H24C10.7 64 0 74.7 0 88v2c0 3.3 2.7 6 6 6h26v368c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V96h26c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24h-88zM184 32h80c5 0 9.8 2.4 12.8 6.4L296 64H152l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm200 432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V96h320v368zm-176-44V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm-80 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm160 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTrashAlt';
export default styled(icon);