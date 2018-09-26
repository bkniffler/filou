import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 351.351V273h276c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H160v-78.348c0-29.388-34.591-43.268-54.627-23.231l-96 95.952c-12.496 12.497-12.497 32.757 0 45.255l96 95.955C125.35 394.56 160 380.85 160 351.351zM32 256l96-96v192l-96-96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaLongArrowAltLeft';
export default styled(icon);