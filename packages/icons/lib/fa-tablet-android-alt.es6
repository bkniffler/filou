import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 96v256H96V96h256m48-96H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM48 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v416c0 8.8-7.2 16-16 16H48zM372 64H76c-6.6 0-12 5.4-12 12v296c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zm-96 352H172c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h104c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTabletAndroidAlt';
export default styled(icon);