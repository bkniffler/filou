import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M72 32h24v304c0 44.1 35.9 80 80 80s80-35.9 80-80V32h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm56 0h96v128h-96V32zm0 160h96v144c0 63.5-96 63.5-96 0V192zM360 32h24v304c0 44.1 35.9 80 80 80s80-35.9 80-80V32h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm56 0h96v128h-96V32zm0 160h96v144c0 63.5-96 63.5-96 0V192zm216 288H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaVials';
export default styled(icon);