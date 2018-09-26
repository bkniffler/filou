import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M632 0h-16c-4.4 0-8 4.1-8 9.1V192h-64V48c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v144H32V9.1c0-5-3.6-9.1-8-9.1H8C3.6 0 0 4.1 0 9.1V512h32v-32h576v32h32V9.1c0-5-3.6-9.1-8-9.1zM384 64h128v128H384V64zM256 448H128V320h128v128zm32 0V320h128v128H288zm320 0H448V304c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v144H32V224h576v224z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaInventory';
export default styled(icon);