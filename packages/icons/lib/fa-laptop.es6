import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 368h-48V96c0-35.3-28.72-64-64-64H128c-35.28 0-64 28.7-64 64v272H16c-8.84 0-16 7.16-16 16v48c0 44.11 35.88 80 80 80h480c44.12 0 80-35.89 80-80v-48c0-8.84-7.16-16-16-16zM96 96c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v272H391.13c-4.06 0-7.02 3.13-7.92 7.09C379.98 389.35 367.23 400 352 400h-64c-15.23 0-27.98-10.65-31.21-24.91-.9-3.96-3.86-7.09-7.92-7.09H96V96zm512 336c0 26.47-21.53 48-48 48H80c-26.47 0-48-21.53-48-48v-32h194.75c6.59 18.62 24.38 32 45.25 32h96c20.88 0 38.66-13.38 45.25-32H608v32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaLaptop';
export default styled(icon);