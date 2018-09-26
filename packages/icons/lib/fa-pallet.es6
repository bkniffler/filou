import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 288h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zM288 32h64v76.2l-32-16-32 16V32zm-128 0h96v128l64-32 64 32V32h96v224H160V32zm472 320c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h56v128H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-56V352h56zM160 480H96V352h64v128zm288 0H192V352h256v128zm96 0h-64V352h64v128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPallet';
export default styled(icon);