import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 384c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm384-32H272c-8.8 0-16 7.2-16 16v176H32V136c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56h576v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V336c0-61.9-50.1-112-112-112zm80 192H288V256h240c44.2 0 80 35.8 80 80v80zM136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8 390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaProcedures';
export default styled(icon);