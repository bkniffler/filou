import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M461.9 0c-5.73 0-11.59 1.1-17.39 3.52L28.74 195.41c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 30.01 24.21 47.93 48.74 47.93 17.3 0 34.75-8.9 44.01-28.74l191.9-415.78C522.06 34.89 494.14 0 461.9 0zm17.55 54.08L287.6 469.74c-3.18 6.82-8.24 10.28-15.03 10.28-5.8 0-16.76-3.33-16.76-15.94v-207.9H47.93c-11.45 0-14.64-8.83-15.49-12.63-1.1-4.93-1.27-13.98 9.7-19.1L456.82 33.04c1.71-.71 3.37-1.05 5.09-1.05 5.42 0 11.49 3.65 15.11 9.08 2.19 3.29 4.32 8.41 2.43 13.01z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaLocationArrow';
export default styled(icon);