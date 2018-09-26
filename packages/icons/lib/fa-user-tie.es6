import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm91.9 272.2L276.2 442l-33.9-101.7 25-25c10.1-10.1 2.9-27.3-11.3-27.3h-64c-14.3 0-21.4 17.2-11.3 27.3l25 25L171.8 442l-39.7-137.7C58.9 305.5 0 365 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-73.4-58.9-132.9-132.1-134.2zM48 480c-8.8 0-16-7.2-16-16v-25.6c0-47.2 32.8-87.5 76.9-98.9L149.5 480H48zm144.9 0l31.1-93.4 31.1 93.4h-62.2zM416 464c0 8.8-7.2 16-16 16H298.5L339 339.5c44.1 11.4 76.9 51.7 76.9 98.9V464z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUserTie';
export default styled(icon);