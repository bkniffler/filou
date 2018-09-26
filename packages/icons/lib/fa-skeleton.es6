import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 160H272V96h168c4.42 0 8-3.58 8-8V72c0-4.42-3.58-8-8-8H272V8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v56H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h168v64H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h232v64H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h168v64H112c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80c0-18.1-6.23-34.6-16.36-48h160.72C326.23 397.4 320 413.9 320 432c0 44.18 35.82 80 80 80s80-35.82 80-80-35.82-80-80-80H272v-64h168c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H272v-64h232c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM160 432c0 26.47-21.53 48-48 48s-48-21.53-48-48 21.53-48 48-48 48 21.53 48 48zm288 0c0 26.47-21.53 48-48 48s-48-21.53-48-48 21.53-48 48-48 48 21.53 48 48z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSkeleton';
export default styled(icon);