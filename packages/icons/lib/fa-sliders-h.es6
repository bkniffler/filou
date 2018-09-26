import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 384H192v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h312c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-344 64h-32v-96h32v96zM504 96H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h152v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h248c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-280 64h-32V64h32v96zm280 80h-88v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h312v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-120 64h-32v-96h32v96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSlidersH';
export default styled(icon);