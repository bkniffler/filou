import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M937 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zm727-876v1536h-1536v-1536h1536z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaYCombinator';
export default styled(icon);