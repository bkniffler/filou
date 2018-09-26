import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 160h-39.3c9.5-13.4 15.3-29.9 15.3-48 0-44.1-33.4-80-74.5-80-42.3 0-66.8 25.4-109.5 95.8C213.3 57.4 188.8 32 146.5 32 105.4 32 72 67.9 72 112c0 18.1 5.8 34.6 15.3 48H48c-26.5 0-48 21.5-48 48v96c0 8.8 7.2 16 16 16h16v112c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V320h16c8.8 0 16-7.2 16-16v-96c0-26.5-21.5-48-48-48zm-187.8-3.6c49.5-83.3 66-92.4 89.3-92.4 23.4 0 42.5 21.5 42.5 48s-19.1 48-42.5 48H274l2.2-3.6zM146.5 64c23.4 0 39.8 9.1 89.3 92.4l2.1 3.6h-91.5c-23.4 0-42.5-21.5-42.5-48 .1-26.5 19.2-48 42.6-48zM192 448H80c-8.8 0-16-7.2-16-16V320h128v128zm0-160H32v-80c0-8.8 7.2-16 16-16h144v96zm96 160h-64V192h64v256zm160-16c0 8.8-7.2 16-16 16H320V320h128v112zm32-144H320v-96h144c8.8 0 16 7.2 16 16v80z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGift';
export default styled(icon);