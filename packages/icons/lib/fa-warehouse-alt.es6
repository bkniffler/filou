import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M528 352H352V240c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zM320 480H128v-96h192v96zm0-128H128v-96h192v96zm192 128H352v-96h160v96zm98.6-361.7L338.6 3.7c-11.8-5-25.3-5-37.2 0l-272 114.6C11.5 125.8 0 143.2 0 162.5V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V162.5c0-6.5 3.8-12.2 9.8-14.8l272-114.6c3.9-1.7 8.5-1.7 12.4 0l272 114.6c6 2.5 9.8 8.3 9.8 14.8V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V162.5c0-19.3-11.5-36.7-29.4-44.2z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWarehouseAlt';
export default styled(icon);