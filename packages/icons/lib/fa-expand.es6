import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM300 32h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V64H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 300v124c0 13.3-10.7 24-24 24H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 480H24c-13.3 0-24-10.7-24-24V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaExpand';
export default styled(icon);