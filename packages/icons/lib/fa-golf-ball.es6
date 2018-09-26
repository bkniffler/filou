import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512"><path d="M416 208C416 91.7 320.5-2.3 203.7 0 91.6 2.3.9 94.2 0 206.3-.5 273.5 31 333 80 371.4V416c0 26.5 21.5 48 48 48 7.3 0 32-4 32 16v26c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26c0-26.5-21.5-48-48-48-7.3 0-32 4-32-16v-16h192v16c0 20-24.6 16-32 16-26.5 0-48 21.5-48 48v26c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26c0-20 24.6-16 32-16 26.5 0 48-21.5 48-48v-44.6c48.6-38 80-96.9 80-163.4zm-384 0c0-97 79-176 176-176s176 79 176 176c0 71-42.4 132.2-103.1 160H135.1C74.4 340.2 32 279 32 208zm240 14.9c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9zm80 16c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9zm-64 64c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGolfBall';
export default styled(icon);