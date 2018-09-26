import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 416h64v-32h-64v32zm32-192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0h-32v-32c0-53-43-96-96-96H304V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H160c-53 0-96 43-96 96v32H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32v32c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-32h32c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM64 384H32V256h32v128zm416 64c0 17.6-14.4 32-32 32H128c-17.6 0-32-14.4-32-32V192c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256zm64-64h-32V256h32v128zm-192 32h64v-32h-64v32zm-96 0h64v-32h-64v32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaRobot';
export default styled(icon);