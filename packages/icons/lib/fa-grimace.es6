import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm-80-232c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm16 32H152c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm-168 96h-24c-8.8 0-16-7.2-16-16v-8h40v24zm0-40h-40v-8c0-8.8 7.2-16 16-16h24v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm56 24c0 8.8-7.2 16-16 16h-24v-24h40v8zm0-24h-40v-24h24c8.8 0 16 7.2 16 16v8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGrimace';
export default styled(icon);