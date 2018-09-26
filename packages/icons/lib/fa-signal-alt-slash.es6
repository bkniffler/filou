import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M637 485.25L23 1.75A7.995 7.995 0 0 0 11.76 3l-10 12.51a7.995 7.995 0 0 0 1.25 11.24l614 483.49a7.995 7.995 0 0 0 11.24-1.25l10-12.51c2.76-3.44 2.2-8.47-1.25-11.23zM544 32h32v364.48l32 25.2V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v314.09l32 25.2V32zM384 160h32v110.49l32 25.2V160c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v60.09l32 25.2V160zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 96H64v-64h32v64zm128-224c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V291.91L242.4 256H224zm32 224h-32V288h32v192zm160 0h-32V367.5l-32-25.2V480c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-62.1l-32-25.2V480z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSignalAltSlash';
export default styled(icon);