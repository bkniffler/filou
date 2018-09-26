import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M637 485.25L23 1.75A7.995 7.995 0 0 0 11.76 3l-10 12.51a7.995 7.995 0 0 0 1.25 11.24l614 483.49a7.995 7.995 0 0 0 11.24-1.25l10-12.51c2.76-3.44 2.2-8.47-1.25-11.23zM472 104c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v172.79l48 37.8V104zM600 8c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v369.59l48 37.8V8zM80 384H48c-4.42 0-8 3.58-8 8v112c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V392c0-4.42-3.58-8-8-8zm216 120c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V336l-48-37.8V504zm128 0c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8v-67.2L424 399v105zM208 288h-32c-4.42 0-8 3.58-8 8v208c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V296c0-4.42-3.58-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSignalSlash';
export default styled(icon);