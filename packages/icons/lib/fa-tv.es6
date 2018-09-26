import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h256v64H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H336v-64h256c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm16 368c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h544c8.8 0 16 7.2 16 16v320z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTv';
export default styled(icon);