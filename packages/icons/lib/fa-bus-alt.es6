import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 384c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm-256 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm360-256h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h48c17.67 0 32-14.33 32-32v-32h160v32c0 17.67 14.33 32 32 32h48c17.67 0 32-14.33 32-32v-32c17.67 0 32-14.33 32-32V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zm-424.03 0H240v128H63.99l-.02-128zM144 480H96v-32h48v32zm272 0h-48v-32h48v32zm32-64H64l-.01-128h384.02L448 416zm.01-160H272V128h176.03l-.02 128zm.02-160H320v-8c0-13.26-10.75-24-24-24h-80c-13.25 0-24 10.74-24 24v8H63.97V80.31C67.31 67 131.41 32 256 32s188.69 35 192.03 48.31V96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBusAlt';
export default styled(icon);