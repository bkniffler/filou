import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M608 32s-32 46.33-32 64 14.33 32 32 32 32-14.33 32-32-32-64-32-64zm-96 96c17.67 0 32-14.33 32-32s-32-64-32-64-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32s-32-64-32-64-32 46.33-32 64 14.33 32 32 32zm-96-32c17.67 0 32-14.33 32-32S320 0 320 0s-32 46.33-32 64 14.33 32 32 32zm-96 32c17.67 0 32-14.33 32-32s-32-64-32-64-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32s-32-64-32-64-32 46.33-32 64 14.33 32 32 32zM64 96c0-17.67-32-64-32-64S0 78.33 0 96s14.33 32 32 32 32-14.33 32-32zm552 64h-16c-4.42 0-8 3.58-8 8v136c0 26.51-21.49 48-48 48H336V136c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v216H96c-26.51 0-48-21.49-48-48V168c0-4.42-3.58-8-8-8H24c-4.42 0-8 3.58-8 8v136c0 44.18 35.82 80 80 80h208v96H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H336v-96h208c44.18 0 80-35.82 80-80V168c0-4.42-3.58-8-8-8zm-112 0c-4.42 0-8 3.58-8 8v152h32V168c0-4.42-3.58-8-8-8h-16zm-384 0c-4.42 0-8 3.58-8 8v152h32V168c0-4.42-3.58-8-8-8h-16zm288 0c-4.42 0-8 3.58-8 8v152h32V168c0-4.42-3.58-8-8-8h-16zm-192 0c-4.42 0-8 3.58-8 8v152h32V168c0-4.42-3.58-8-8-8h-16z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMenorah';
export default styled(icon);