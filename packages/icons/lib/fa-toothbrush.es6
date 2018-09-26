import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H448V224h-32v192h-32V224h-32v192h-32V224h-32v192h-32V224h-32v192h-32V224h-32v192h-32V224H96v192H64V224H32v192H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-16 64H32v-32h576v32zM64 192h352c35.35 0 64-28.65 64-64C480 57.31 422.69 0 352 0c23.62 23.62 6.89 64-26.51 64H64C28.65 64 0 92.65 0 128s28.65 64 64 64zm0-96h261.49c28.21 0 53.41-16.84 64.2-42.9 1.59-3.84 2.82-7.76 3.69-11.72C425.66 56.87 448 89.88 448 128c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32s14.36-32 32-32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaToothbrush';
export default styled(icon);