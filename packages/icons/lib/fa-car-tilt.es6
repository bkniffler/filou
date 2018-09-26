import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M179.55 305.94c-18.28 18.28-19.71 43.37-3.42 59.67 16.3 16.3 41.4 14.87 59.68-3.41l7.21-7.07c27.61-27.61 17.58-45.88 9.14-54.31-17.38-17.38-55.64-11.85-72.61 5.12zm46.57 32.29c-2.47 2.47-5.01 4.87-7.21 7.07-8.79 8.79-19.14 10.15-25.88 3.41-6.74-6.74-5.37-17.09 3.41-25.88 8.79-8.79 32.07-11.86 38.81-5.12 5.06 5.06-1.72 13.11-9.13 20.52zM632 480H307.39c13.09-18.64 12.16-44.2-4.48-60.84l-22.53-22.53 180.26-180.25 22.53 22.53c18.64 18.64 48.96 18.64 67.6 0l11.27-11.27c18.64-18.64 18.64-48.96 0-67.6L460.63 58.65c-25.4-25.39-63.53-29.7-93.65-13.63L295.49 8.66c-30.74-15.63-68.05-9.71-92.44 14.68L87.33 139.05c-24.39 24.39-30.31 61.7-14.68 92.45l36.36 71.48c-16.06 30.13-11.76 68.26 13.63 93.65L206.02 480H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-92.51-297.43c6.22 6.22 6.21 16.33 0 22.53l-11.27 11.27c-6.21 6.21-16.32 6.21-22.53 0l-22.53-22.53 33.8-33.8 22.53 22.53zm-438.43 34.48c-9.41-18.5-5.87-40.79 8.81-55.47L225.58 45.87a47.715 47.715 0 0 1 55.47-8.81l58.67 29.84L130.9 275.72l-29.84-58.67zm100.45 213.38l-56.33-56.33c-18.64-18.63-18.64-48.96 0-67.6L370.5 81.18c18.64-18.64 48.96-18.64 67.6 0l33.8 33.8 22.53 22.53-33.8 33.8-22.53 22.53-236.59 236.59zm78.86 33.79l-11.27 11.27c-2.9 2.9-6.68 4.32-10.5 4.51h-1.53c-3.82-.18-7.6-1.6-10.51-4.51l-22.53-22.53 33.8-33.8 22.53 22.53c6.23 6.22 6.22 16.33.01 22.53zm149.24-352.09c-16.3-16.3-41.39-14.86-59.67 3.41-16.97 16.97-22.5 55.23-5.12 72.61 8.44 8.44 26.71 18.46 54.31-9.14l7.07-7.21c18.28-18.27 19.71-43.36 3.41-59.67zm-20.31 42.78c-2.2 2.2-4.6 4.74-7.07 7.21-7.41 7.41-15.46 14.2-20.51 9.14-6.74-6.74-3.67-30.03 5.12-38.81 8.79-8.79 19.14-10.15 25.88-3.42s5.37 17.09-3.42 25.88z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCarTilt';
export default styled(icon);