import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M560 96H80c-44.1 0-80 35.9-80 80v160c0 44.1 35.9 80 80 80h480c44.1 0 80-35.9 80-80V176c0-44.1-35.9-80-80-80zM160 384H80c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h80v256zm288 0H192V128h256v256zm160-48c0 26.5-21.5 48-48 48h-80V128h80c26.5 0 48 21.5 48 48v160zM272 228c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20zm96 0c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20zm-96 96c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20zm96 0c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBandAid';
export default styled(icon);